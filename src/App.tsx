// import reactLogo from './assets/react.svg'; // 引入的其实就是字符串路径
import { useState} from "react";
import SVGCase from "./components/svgcase";
import './App.scss';
import useToast from "./hooks/useToast";
import ToastContext from "./context/ToastContext";


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
                id: '012',
                name: 'ferris',
            },
            {
                id: '013',
                name: 'github',
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
                id: '025',
                name: 'pip',
            },
            {
                id: '028',
                name: 'python',
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
                id: '040',
                name: 'windowsserver',
            },
        ]
    });
    const [openToast, toastHolder] = useToast('已复制！');
    return (
        <ToastContext.Provider value={openToast}>
            <div id='app'>
                {toastHolder}
                {state.svgElements.map(svg => {
                    return <SVGCase key={svg.id} filename={svg.name}/>
                })}
            </div>
        </ToastContext.Provider>
    )
}

export default App;
