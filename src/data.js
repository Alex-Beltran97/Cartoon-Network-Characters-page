class Characters{
    constructor(name,serie,year,img,msg){
        this.name = name;
        this.serie = serie;
        this.year = year;
        this.img = img;
        this.msg = msg;
    }
};

const dexter = new Characters(
    'Dexter',
    "Dexter's Lab",
    '(1995-2003)',
    1,
    'DEE-DEE FUERA DE MI LABORATORIO!!!!!!'
    );

const johnny = new Characters(
    'Johnny',
    'Johnny Bravo',
    '(1997-2004)',
    2,
    'Espera, ¿Quien es ese tipo guapo?. ¿HOLA? ¿EMERGENCIAS? HAY UN TIPO GUAPO EN MI CASA. Aguarde, cancelelo todo... solo soy yo. 😎'
    );

const corage = new Characters(
    'Corage',
    'Courage the Cowardly Dog',
    '(1999-2002)',
    3,
    'Ouhh!! Lo que hago por amor. 😓'
    );

const grim = new Characters(
    'Grim',
    'The Grim Adventures of Billy & Mandy',
    '(2003-2007)',
    4,
    'Bueno... Solia tocar la escalera al cielo en la secundaria. 🎸'
    );


const data = [dexter,johnny,corage,grim]


export default data;
