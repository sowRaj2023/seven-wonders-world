import {Component} from 'react'

import './index.css'
import WondersItem from '../WondersItem'

const wondersData = [
    {
        id: 1,
        title:"TAJ MAHAL",
        description:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself",
        imageUrl:"https://img.freepik.com/free-photo/mesmerizing-shot-famous-historic-taj-mahal-agra-india_181624-16028.jpg",
    },
    {
        id: 2,
        title: "GREAT WALL OF CHINA",
        description:"Its main body consists of walls, horse tracks, watch towers, and shelters on the wall, and includes fortresses and passes along the Wall. The Great Wall reflects collision and exchanges between agricultural civilizations and nomadic civilizations in ancient China.",
        imageUrl:"https://img.freepik.com/free-photo/great-wall-china_395237-147.jpg",
    },
    {
        id: 3,
        title: "PETRA",
        description:"Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the Rose City.",
        imageUrl:"https://img.freepik.com/free-photo/ancient-sandstone-ruins-majestic-architecture-eroded-rock-formations-generated-by-ai_188544-21351.jpg",
    },
    {
        id: 4,
        title: "COLOSSEUM",
        description:"The Colosseum is an amphitheatre built in Rome under the Flavian emperors of the Roman Empire. It is also called the Flavian Amphitheatre. It is an elliptical structure made of stone, concrete, and tuff, and it stands four stories tall at its highest point",
        imageUrl:"https://img.freepik.com/free-photo/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise_181624-6998.jpg",
    },
    {
        id: 5,
        title: "CHICHEN ITZA",
        description:"Chichen Itza is a complex of Mayan ruins centrally located on the northern half of Mexico's Yucatan Peninsula. In ancient, pre-Colombian times, Chichen Itza was a vibrant city with a diverse population of Mayan people extending well into the tens of thousands.",
        imageUrl:"https://img.freepik.com/free-photo/breathtaking-view-pyramid-archaeological-site-chichen-itza-yucatan-mexico_181624-47577.jpg",
    },
    {
        id: 6,
        title: "MACHU PICCHU",
        description:"Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. Often referred to as the Lost City of the Incas, it is the most familiar icon of the Inca Empire.",
        imageUrl:"https://img.freepik.com/free-photo/high-angle-beautiful-machu-picchu-citadel-surrounded-by-foggy-mountains-urubamba-peru_181624-1395.jpg",
    },
    {
        id: 7,
        title: "CHRIST THE REDEEMER",
        description:"Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida sculpted the face",
        imageUrl:"https://img.freepik.com/free-photo/island-symbol-storm-architecture-manhattan_1206-67.jpg",
    },
]


class WondersList extends Component{

    
    render(){
        return(
            <div className="blog-list-container">
                <h1 className="wonder-heading">SEVEN WONDERS OF THE WORLD</h1>
        <p className="wonder-description">The world's seven wonders are the Colosseum, Machu Picchu, Petra, Taj Mahal, Christ the Redeemer, Great Wall, and Chichen Itza. Each wonder encapsulates cultural, historical, and architectural significance, embodying human creativity across ages.</p>
           {wondersData.map(item => (
          <WondersItem wondersData={item} key={item.id} />
        ))}
      </div>
        )
    }
}
export default WondersList