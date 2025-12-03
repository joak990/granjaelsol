import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, onSnapshot, getDocs, doc, setDoc } from 'firebase/firestore';

// --- VARIABLES GLOBALES DEL ENTORNO ---
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfigRaw = typeof __firebase_config !== 'undefined' ? __firebase_config : '{}';
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

let app = null;
let db = null;
let auth = null;
let isServiceAvailable = false; 

try {
    const config = JSON.parse(firebaseConfigRaw);

    if (config.projectId && config.projectId.length > 0) {
        app = initializeApp(config);
        db = getFirestore(app);
        auth = getAuth(app);
        isServiceAvailable = true;
        console.log("Firebase: Servicios inicializados correctamente.");
    } else {
        console.error("Firebase: Configuración inválida (projectId no encontrado). La BD no funcionará.");
    }
} catch (e) {
    console.error("Error FATAL al inicializar Firebase. Verifique __firebase_config.", e);
}

// --- MOCK DATA FALLBACK (Exportado para uso) ---
export const MOCK_PRODUCTS = {
    Vacunos: [
        { id: 1, name: "Asado", description: "$15900/Kg" },
        { id: 2, name: "Americano", description: "$16890/Kg" },
        { id: 3, name: "Matambre", description: "$14500/Kg" },
        { id: 4, name: "Entraña", description: "$19900/Kg" },
    ],
    Cerdo: [
        { id: 10, name: "Bondiola", description: "$10900/Kg" },
        { id: 11, name: "Carré s/ hueso", description: "$10200/Kg" },
        { id: 12, name: "Churrasquito", description: "$14250/Kg" },
    ],
    Pollos: [
        { id: 20, name: "Milanesa de pollo", description: "$8850/Kg" },
        { id: 21, name: "Pata y muslo", description: "$3900/Kg" },
        { id: 22, name: "Pollo entero", description: "$3490/Unidad" },
    ],
};

// --- FUNCIONES DE UTILIDAD FIREBASE ---
const getProductsCollectionPath = () => `/artifacts/${appId}/public/data/productos`;

export function useFirebaseInit() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);
    const [isInitReady, setIsInitReady] = useState(false);

    useEffect(() => {
        if (!isServiceAvailable) {
            setIsInitReady(true);
            return;
        }

        const initializeAuth = async () => {
            try {
                if (initialAuthToken) {
                    await signInWithCustomToken(auth, initialAuthToken);
                } else {
                    await signInAnonymously(auth);
                }
            } catch (error) {
                console.error("Error durante la autenticación de Firebase:", error);
                setIsInitReady(true);
            }
        };

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
                setIsAuthenticated(true);
            } else {
                setUserId(null);
                setIsAuthenticated(false);
            }
            setIsInitReady(true);
        });

        if (!auth.currentUser) {
             initializeAuth();
        }

        return () => unsubscribe();
    }, []);

    return { isAuthenticated, userId, db, auth, isInitReady, isServiceAvailable };
}

export function useProductsRealtime(isAuthenticated, isServiceAvailable) {
    const [products, setProducts] = useState({ Vacunos: [], Cerdo: [], Pollos: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isServiceAvailable) {
            setProducts({ Vacunos: [], Cerdo: [], Pollos: [] });
            setIsLoading(false);
            return;
        }

        if (!isAuthenticated) return;

        const collectionRef = collection(db, getProductsCollectionPath());
        const q = query(collectionRef);

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const productsByCat = { Vacunos: [], Cerdo: [], Pollos: [] };
            
            snapshot.docs.forEach(doc => {
                const data = doc.data();
                const product = { id: doc.id, ...data, description: data.description || 'Precio no disponible', category: data.category || 'Vacunos' };
                
                if (product.category === 'Vacunos' || product.category === 'Vacuno' || product.category === 'Carne') {
                    productsByCat.Vacunos.push(product);
                } else if (product.category === 'Cerdo') {
                    productsByCat.Cerdo.push(product);
                } else if (product.category === 'Pollo' || product.category === 'Aves') {
                    productsByCat.Pollos.push(product);
                }
            });

            setProducts(productsByCat);
            setIsLoading(false);
        }, (error) => {
            console.error("Error al escuchar productos en tiempo real:", error);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [isAuthenticated, isServiceAvailable]); 

    return { products, isLoading };
}

export async function setupInitialProducts(db, userId) {
    if (!db || !userId) return;
    const collectionPath = getProductsCollectionPath();
    const q = query(collection(db, collectionPath));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) return;

    console.log("Cargando productos iniciales...");
    const initialData = [
        { name: "Asado", description: "$15900/Kg", category: "Vacunos" },
        { name: "Americano", description: "$16890/Kg", category: "Vacunos" },
        { name: "Bondiola", description: "$10900/Kg", category: "Cerdo" },
        { name: "Pechito", description: "$8190/Kg", category: "Cerdo" },
        { name: "Pollo entero", description: "$3490/Unidad", category: "Pollo" },
        { name: "Suprema", description: "$9690/Kg", category: "Pollo" },
    ];

    for (const product of initialData) {
        await setDoc(doc(collection(db, collectionPath)), product);
    }
    console.log("Productos iniciales cargados exitosamente.");
}