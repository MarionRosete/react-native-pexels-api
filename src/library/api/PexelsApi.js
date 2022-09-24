const pexelsUrl = 'https://api.pexels.com/v1/search?query=bike'
const pexelsAPI = async () => {
    const request = await fetch(pexelsUrl,
        {
            headers:{
                'Authorization':'563492ad6f917000010000010b5f2943cea34b458a84d31aa103ee98'
        }
    })
    const {photos} = await request.json()
    return photos
}
export default pexelsAPI