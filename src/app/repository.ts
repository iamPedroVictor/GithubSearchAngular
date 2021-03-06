export class Repository {
    public name: string;
    public ownerName: string;
    public ownerAvatar: string;
    public repositoryLink: string;
    public language: string;
    public description: string;

    constructor(data: any){
        this.name = data.name;
        this.ownerName = data.owner.login;
        this.ownerAvatar = data.owner.avatar_url;
        this.repositoryLink = data.html_url;
        this.language = data.language;
        this.description = data.description;
    }
}
