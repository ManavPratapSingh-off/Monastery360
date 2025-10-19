import api from "./config.js";

export const get_events = async () => {
    try {
        const events = await api.get("/api/events")
        return events.data
    } catch (e) {
        return e.response?.data?.message || "error at eventcalls.js/get_events without message"
    }
}