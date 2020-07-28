export default class AuthPage{

get email(){
      return cy.get("#email")
}

get pass() {
      return cy.get("#password")
      }

get loginBtn() {
      return cy.get(".nav-link").contains("Login")
      }

      login(mejl, sifra) {
            this.email.type(mejl)
            this.pass.type(sifra)


}
}
export const authPage = new AuthPage()