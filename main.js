import pk1 from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const {Client, LocalAuth} = pk1;

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on("qr",(qr)=>{
    console.log(qrcode.generate(qr, {small: true}));
});

client.initialize();