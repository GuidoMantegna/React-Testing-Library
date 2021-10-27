const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Laith",
                    last: "Harb"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/59.jpg"
                },
                login: {
                    username: "ThePhonyGOAT"
                }
            }
        ]
    }
}


export default {
    /* We are going to do an Axios Get call (no just an Axios call) so we define 'get' prop. */
    get: jest.fn().mockResolvedValue(mockResponse) //We pass in the same structure that we received from the API.
}
