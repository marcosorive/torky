import React from 'react'

export class Footer extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <div className="mx-auto my-3 text-center">
                <p>Made with <span role="img" aria-label="heart emoji">❤️</span> in Spain | <a href="" data-toggle="modal" data-target="#js-modal-info" className="indigo-text">Información</a>  | <a href="" data-toggle="modal" data-target="#js-modal-contact" className="indigo-text">Contacto</a></p>
            </div>
            <div id="js-modal-info" class="modal fade" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header indigo text-white">
                  <h4 class="modal-title">¡Hola!</h4>
                </div>
                <div class="modal-body">
                  <p>Este es un pequeño proyecto que he creado como parte de mi aprendizaje como desarrollador, así que no siempre funciona a la perfección. Dejo un pequeño FAQ.
                  <ul>
                      <li><span class="store-style">¿Por qué Game tarda más y muchas veces no funciona?</span> La web de Game (en mi experiencia) se basa fuertemente en javascript y carga dinámica de contenidos. Mi sistema se basa en hacer una búsqueda y obtener el precio, pero el servidor de Game devuelve una web "vacía" y luego lo "rellena". Prueba de esto es que cuando buscas durante unos segundos ves un mensaje de "Cargando..." y después aparecen los resultados. Sigo trabajando para mejorar mi sistema, espero poder arreglarlo en el futuro. </li>
                      <li><span class="store-style">¿Solo 5 tiendas? ¿Habrá más?</span> En mi experiencia como comprador de videojuegos, Amazon, Fnac, Game e Instant Gaming son los sitios con mejores precios y además fiables. El Corte inglés es caro, pero quería añadir alguna más ver otras opciones. Si quieres aparecer contacta conmigo.</li>
                      <li><span  class="store-style">¿El servicio es gratis? ¿Hay costes añadidos?</span> Si, completamente gratis y lo seguirá siendo. Esto es parte de mi mejora como desarrollador y no pretendo ganar dinero con ello. Si puedo pagarme unas cervezas con los enlaces referidos me daré con un canto en los dientes :)</li>
                  </ul>
                     </p>
                     <h4>¿Eres desarrollador? </h4>
                     <p>Si eres dev o simplemente te gusta la tecnología te cuento un poco más como está hecho esto. El back-end está hecho en python sobre Flask. Había trabajando antes con Django y me apetecía probar otro framework. Para el front-end he usado Bootstrap 4 y javascript vanilla. Bootstrap usa JQuery y ya que lo cargo desde el cdn podría haberlo usado, pero quería probar con JS puro.<br/>Para obtener los precios he creado un web scrapper usando BeautifulSoup, excepto para amazon que uso su API. Las webs de fnac, corte inglés e Instant gaming fueron muy fáciles de scrappear, la de Game me está costando un poco.<br/><br/>
                     Si quieres contactar conmigo por cualquier razón busca abajo el apartado de contacto.
                     </p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
      
          <div id="js-modal-contact" class="modal fade" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header indigo text-white">
                  <h4 class="modal-title">Contacto</h4>
                </div>
                <div class="modal-body">
                  <p>Puedes contactar conmigo principalmente por dos vías:
                      <ul>
                          <li>Email: <a href="mailto:marcos@orive.me" target="_blank">marcos(at)orive.me</a> </li>
                          <li>Twitter: <a href="https://twitter.com/marcosorive" target="_blank">@marcosorive</a></li>
                      </ul>
                      Me pondré en contacto contigo lo antes que pueda.
                  </p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
          <div id="js-modal-data" class="modal fade" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header indigo text-white">
                  <h4 class="modal-title">Recolección de datos</h4>
                </div>
                <div class="modal-body">
                  <p>
                      <ul>
                      <li>Las cookies de terceros que utilizamos son por usar los CDN de cloudflare y JQuery. La única cookie propia que usamos es para no tener que molestarte con el mensaje cada vez que entras. <a href="http://cookiesandyou.com/" target="_blank">Aprende más obre las cookies.</a></li>
                      <li>Los datos que recolectamos son los siguientes: lo que se busca y cuando se busca. Es decir, el nombre del juego y la fecha y hora. No se recolecta ningún dato personal. Puedes ver el código fuente para comprobarlo en <a href="https://github.com/marcosorive" target="_blank">mi github</a> El fin de esto es puramente estadístico, aunque dudo que mucha gente vaya a usar este sitio, podría sacar conclusiones interesantes.</li>
                      </ul>
                  </p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}       

