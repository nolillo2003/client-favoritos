export class Favorito {
    public _id: string;
    public title: string;
    public description: string;
    public url: string;

    constructor(_id: string, title: string, description: string, url: string) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.url = url;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title: string){
        this.title = title;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description: string){
        this.description = description;
    }
    
    getUrl(){
        return this.url;
    }

    setUrl(url: string){
        this.url = url;
    }    
}