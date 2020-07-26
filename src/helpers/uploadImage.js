export const uploadImage = async (file) => {
    try {
        const form = new FormData()
        form.append('file', file)
        form.append('upload_preset', 'journal-app')
        const res = await fetch('https://api.cloudinary.com/v1_1/drgs7qxkv/upload' , {
            method: 'POST',
            body: form
        })
        if(res.ok){
            const data = await res.json()
            return data.secure_url
        }else{
            throw Error(await res.json())
        }   
    } catch (error) {
        throw error
    }
}