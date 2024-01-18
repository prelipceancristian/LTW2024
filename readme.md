# FileShare
## Functionalitate
Aplicatia permite crearea unor note text rapid, accesarea acestora de oriunde, management de note text. 
Utilizatorul poate folosi aplicatia atat cu sau fara cont. 

## Instalare
Aplicatia este organizata pe doua module principale, front end (fe) si back end (be).
Pentru a rula aplicatia este nevoie ca ambele module sa ruleze. 

### FE
Urmatoarele librarii au fost folosite:
- axios
- react-bootstrap
- bootstrap

Pentru a instala toate dependintele este suficient sa se ruleze comanda `npm install` in folderul corespunzator modulului. 
Odata instalate, se foloseste comanda "npm start" pentru a rula aplicatia. 

### BE
Urmatoarele pachete NuGet au fost folosite:
- bcrypt
- Microsoft.AspNetCore.Authentication.JwtBearer
- Microsoft.AspNetCore.OpenApi
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.Sqlite
- Microsoft.EntityFrameworkCore
- Swashbucle.AspNetCore
- System.IdentityModel.Tokens.Jwt

Pentru a instala toate dependintele este suficient sa se ruleze comanda `nuget restore be.sln` in folderul corespunzator modulului. 
Odata instalate, se foloseste comanda "dotnet run" pentru a rula aplicatia. 
