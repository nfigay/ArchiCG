// dont remove parameters, but complete them accordingly
// the roles will be used in order to filter the viewpoints you will have access by default
// your organization, if fitting with organizations in the model, will also be used for parametering some actions on the model
var configuration={
name:"Doe",
firstname:"John",
title:"Mr",
roles:["enterprise-architect"],// a list of archimate roles
organisations:["myCompany"]
};
//alert(`
//Welcome to ArchiMateCG
//
//ArchiMateCG was launched with the configuration defined in config.js (Change it to fit to your profile)
//
//Person: ${configuration.title} ${configuration.firstname} ${configuration.name}
//Roles: ${JSON.stringify(configuration.roles)}
//Organisations: ${ JSON.stringify(configuration.organisations)}
//`);