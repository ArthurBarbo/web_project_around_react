export async function signup(req,res){
    const { email, password } = req.body;

console.log("Novo usuário:", email, password);

res.send("Usuário registrado com sucesso!");
}