import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const changeApiData = (data) => {
//     return {
//         type: "CHANGEAPIDATA",
//         payload: { data }
//     }
// }

export const changeApiData = createAsyncThunk("data/getData",
    async () => {
        const res = await axios.get("https://api.quotable.io/random");
        return {
            payload: { data: res.data.content }
        }
    }
)