import express, { type Request, type Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// RUTA 1: Página principal
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// RUTA 2: Respuesta con el texto en color rojo
app.post('/mostrar-animal', (req: Request, res: Response) => {
    const animal = req.body.animalNombre;
    
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resultado</title>
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
                body {
                    background-color: #f0f2f5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    color: #333;
                }
                .card {
                    background: #ffffff;
                    padding: 2.5rem;
                    border-radius: 16px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
                    text-align: center;
                    width: 100%;
                    max-width: 400px;
                    margin: 1rem;
                }
                h1 {
                    font-size: 1.5rem;
                    color: #1a1a1a;
                    margin-bottom: 1.5rem;
                    font-weight: 600;
                }
                .animal-box {
                    background-color: #f3f4f6;
                    /* Cambiamos el color de la letra a rojo y aumentamos el grosor para mejor lectura */
                    color: #dc2626; 
                    padding: 0.8rem 1.2rem;
                    border-radius: 8px;
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                }
                a {
                    text-decoration: none;
                    background-color: #4f46e5;
                    color: white;
                    padding: 0.85rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    transition: background-color 0.2s;
                }
                a:hover {
                    background-color: #4338ca;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Tu animal favorito es</h1>
                <div class="animal-box">${animal}</div>
                <a href="/">Volver</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Servidor activo en http://localhost:${port}`);
});
