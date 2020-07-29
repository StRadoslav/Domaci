export default class CreatePage{

get title(){
     return cy.get('#title')
}

get description(){
    return cy.get('#description')
}

get pictureUrl(){
     return cy.get('[type = url]')
}

get submitBtn(){
    return cy.get('.btn-custom').contains("Submit")
}

create(naslov,opis,url){
    this.title.type(naslov)
    this.description.type(opis)
    this.pictureUrl.type(url)
    this.submitBtn.click()
}

}
export const createPage = new CreatePage()


