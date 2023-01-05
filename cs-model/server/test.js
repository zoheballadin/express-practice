import axios from "axios";

async function getAPI(){
    try {
        let res = await axios.get("http://localhost:5001/adnan")
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}

getAPI()