import { Machine } from "xstate";

export const toggleViews = Machine({
    id: "toggleViews",
    initial: "week",
    states: {
        week: {
            on: {
                TOGGLE_DAYS: "twoDays",
            }
        },
        twoDays: {
            on: {
                TOGGLE_WEEK: "week"
            }
        }
    }
});