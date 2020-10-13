import React from 'react'; // React
import pointmap from '../images/Logoh.svg'; // Img- Logo
import {Link} from 'react-router-dom'; // Links
import {FiPlus} from 'react-icons/fi'; // Icons
import '../styles/MapaDeOrfanatos.css'; // Css Mapa de Orfanatos
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function MapaDeOrfanatos(){
    return(
        
        <div id='page-map'>
            <aside>
                <header>
                    <img src={pointmap} alt='logo'/>
                    <h2>Escolha um Orfanato no Mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>

                </header>

                <footer>
                    <strong>Praia Grande</strong>
                    <span>São Paulo</span>

                </footer>
            </aside>

            
                
                <Map 
                center={[-24.0103866,-46.4114042]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
                >

                   <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`} />
                  
                  </Map>
           

            <Link to="/" className='create-orphanarte'>
                <FiPlus/>
            </Link>
        </div>
    );
}

export default MapaDeOrfanatos;