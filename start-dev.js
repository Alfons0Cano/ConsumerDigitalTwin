const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const UPDATE_FLAG_FILE = path.join(__dirname, '.update-needed');

function startServer() {
    // Configurar variables de entorno para el servidor React
    const env = {
        ...process.env,
        HOST: '0.0.0.0',
        PORT: '3000'
    };

    // Iniciar el servidor React
    const reactProcess = spawn('npm', ['start'], {
        env,
        stdio: 'inherit',
        shell: true
    });

    // Manejar la señal SIGUSR1 para reiniciar el servidor
    process.on('SIGUSR1', () => {
        console.log('Received update signal, restarting server...');
        reactProcess.kill();
        startServer();
    });

    // Manejar la terminación normal del proceso
    reactProcess.on('close', (code) => {
        if (code !== null && code !== 0) {
            console.log(`Server process exited with code ${code}, restarting...`);
            startServer();
        }
    });
}

// Iniciar el servidor
console.log('Starting development server with auto-update capability...');
startServer();