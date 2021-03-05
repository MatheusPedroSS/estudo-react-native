import React from 'react';
import { Text } from 'react-native';

function App () {
    return <Text>Primeiro Componente</Text>
}

// Formas possiveis de criação de Componentes:

// export default function () {
//     return <Text>Primeiro Componente</Text>
// }

// const App = function () {
//     return <Text>Primeiro Componente!</Text>
// }

// export default () => {
//     return <Text>Primeiro Componente!!</Text>
// }

// export default () => <Text>Primeiro Componente!!!</Text>

export default App;