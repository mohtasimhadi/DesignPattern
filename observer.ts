import Data from "./Data"

export interface Observer {
    update(data: Data) : void
}