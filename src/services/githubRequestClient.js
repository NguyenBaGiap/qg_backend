import { simpleGetRequest} from "Services/baseAPIClient";

export class GithubRequestClient {
    fetchUsers = async (param) => {
        return await simpleGetRequest(`search/users`, param)
    }
}
