type translataionContainer ={
    [key: string]: {
        [key:string]: string;
    };
};

const indexTrans: translataionContainer = {
    // localization button in login page
    langs: {
        en: 'AR',
        ar: 'EN'
    },
    hello:{
        en:'hello',
        ar:'اهلا'
    }

};

export default indexTrans;