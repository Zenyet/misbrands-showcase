// import reactLogo from './assets/react.svg'; // 引入的其实就是字符串路径
import { useState} from "react";
import SVGCase from "./components/svgcase";
import './App.scss';

function App() {
    const [state] = useState({
        svgElements: [
            {
                id: '001',
                name: 'vscode'
            },
            {
                id: '002',
                name: 'relectron',
            },
            {
                id: '003',
                name: 'aws',
            },
            {
                id: '004',
                name: 'azure',
            },
            {
                id: '005',
                name: 'cmd',

            },
            {
                id: '006',
                name: 'cpp',
            },
            {
                id: '007',
                name: 'debian',
            },
            {
                id: '008',
                name: 'discord',
            },
            {
                id: '009',
                name: 'Django',
            },
            {
                id: '010',
                name: 'dotnet',
            },
            {
                id: '011',
                name: 'emacs',
            },
            {
                id: '012',
                name: 'ferris',
            },
            {
                id: '013',
                name: 'github',
            },
            {
                id: '014',
                name: 'gtk',
            },
            {
                id: '015',
                name: 'haskell'
            },
            {
                id: '016',
                name: 'javascript',
            },
            {
                id: '017',
                name: 'jquery',
            },
            {
                id: '018',
                name: 'mariadb',
            },
            {
                id: '019',
                name: 'teams',
            },
            {
                id: '020',
                name: 'mysql1',
            },
            {
                id: '021',
                name: 'nginx',
            },
            {
                id: '022',
                name: 'mysql2',
            },
            {
                id: '023',
                name: 'oracle-sun',
            },
            {
                id: '024',
                name: 'php',
            },
            {
                id: '025',
                name: 'pip',
            },
            {
                id: '026',
                name: 'postgresql',
            },
            {
                id: '027',
                name: 'postgresql2',
            },
            {
                id: '028',
                name: 'python',
            },
            {
                id: '029',
                name: 'qt',
            },
            {
                id: '030',
                name: 'racket',
            },
            {
                id: '031',
                name: 'rails',
            },
            {
                id: '032',
                name: 'react',
            },
            {
                id: '033',
                name: 'ruby',
            },
            {
                id: '034',
                name: 'rust',
            },
            {
                id: '035',
                name: 'shellscript',
            },
            {
                id: '036',
                name: 'spring',
            },
            {
                id: '037',
                name: 'stackoverflow',
            },
            {
                id: '038',
                name: 'ubuntu',
            },
            {
                id: '039',
                name: 'vscodeST',
            },
            {
                id: '040',
                name: 'windowsserver',
            },
        ]
    });

    return (
        <div id='app'>
            {state.svgElements.map(svg => {
                return <SVGCase key={svg.id} filename={svg.name}/>
            })}
        </div>
    )

}

export default App;
