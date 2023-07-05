
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

import { Fetchproduto } from "./components/Fetchproduto";
import { Addproduto } from './components/Addproduto';
import { FetchPessoa } from "./components/FetchPessoa";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/fetch-produto',
        element: <FetchProduto />
    },

    {
        path: '/add-produto',
        element: <AddProduto />
    },
    {
        path: '/fetch-Pessoa',
        element: <FetchPessoa />
    }
];

export default AppRoutes;