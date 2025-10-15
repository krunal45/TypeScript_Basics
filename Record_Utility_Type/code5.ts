// Creating keys from a const array

const pages = ['login','home','contact'] as const;
console.log(pages.at(3));

type Page = typeof pages[number];

type PageContent = Record<Page,string>;

const content:PageContent = {
    login:'Welcome User to Login Page',
    home:'Welcome User to Home Page',
    contact:'Welcome User to Contact Page'
}
console.log('Login: ',content.login);
console.log('Home: ',content.home);
console.log('Contact: ',content.contact);