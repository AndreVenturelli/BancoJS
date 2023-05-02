
// No caso esse código cria variáveis e array para armazenar alguns dados, id da conta, senha, nome do usuario, saldo etc. O loop FOR é usado para preenchero array.
var id, password, infoname, balance, typemoney, rank, joindate, country  = new Array();
var account = new Array(); // Esse é o array 
id= [1, 2, 3, 4];
password= [11,22,33,44];
infoname = ["André","Professor Luciano","Luxemburgo","Cassio"];
balance = [0,0,0,0];
typemoney =["R$","R$","R$","R$"];
rank = ["Gold","Silver","Copper","Noob"];
joindate = ["22/03/2020","10/02/2023","22/03/2023","10/02/2023"];
country = ["Brasil", "USA", "Brasil","Brasil"]
for (i = 0; i < id.length; i++){ // Esse é o loop for que preenche o array com as devidas informações
	account[i] = parseInt(balance[i]);
}
var i = 0; 
var success = -1; 


function Login(){
	for (i = 0; i< id.length; i++){
		if ((document.getElementById("idname").value == id[i]) && (document.getElementById("pass").value == password[i])) {
            document.getElementById("loginaccount").style.display = 'none';
            document.getElementById("manageaccount").style.display = 'block';
            document.getElementById("content").style.display = 'block';
            document.getElementById("content2").style.display = 'block';
            document.getElementById("content3").style.display = 'block';
                alert("Olá, você entrou!" + infoname[i]);
        		success=i;
        		prjoindate=joindate[i];
        		prname=infoname[i];
				prbalance=account[i];
				prtypemoney= typemoney[i];
				prcountry = country[i];

	document.getElementById("joindate").innerHTML ="Entrou "+prjoindate;
	document.getElementById("infoname").innerHTML = prname;
	document.getElementById("infoname2").innerHTML = prname;
	document.getElementById("balance").innerHTML = prbalance;
	document.getElementById("typemoney").innerHTML = prtypemoney;
	document.getElementById("country").innerHTML =prcountry;
        }
	}
	if (success == -1) {
        alert("Eita! Errou a conta! Digite a conta correta para entrar");
    }
}


function Deposit() {
	document.getElementById("errortick").style.display = 'none';
	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';
    var input = document.getElementById("Depositinput").value;
    if (input<0) {
    	document.getElementById("errortick").style.display = 'block';
    	document.getElementById("notick").style.display = 'none';
    }else{
    input = parseInt(input);
    account[success] += input;
    prbalance=account[success];
    document.getElementById("balance").innerHTML =prbalance;  
    document.getElementById("notification") .innerHTML= "Deu certo! Você depositou "+input+" R$ na conta";
    }
}

function Withdrawal() {
	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';
	var input = document.getElementById("Withdrawalinput").value;
	if (input<0) {
		document.getElementById("errortick").style.display = 'block';
    	document.getElementById("notick").style.display = 'none';	
    } else if (input != parseInt(input)) {
    	 document.getElementById("notick").style.display = 'none';
    	 document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification").innerHTML = "EITA! Você digitou coisa errada! Eu só leio números positivos hehe ";
    } else if (account[success] - parseInt(input) >= 1) {
    	document.getElementById("errortick").style.display = 'none';
        account[success] -= parseInt(input);
        document.getElementById("notification").innerHTML = "Success withdrawal " + input + " R$";
        prbalance=account[success];
        document.getElementById("balance").innerHTML =prbalance;
    } else if (account[success] - parseInt(input) < 0) {
    	document.getElementById("notick").style.display = 'none';
    	document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification").innerHTML = "Eita! Você é muito pobre pra fazer esse saque kkk";
    } else {
    	document.getElementById("notick").style.display = 'none';
    	document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification").innerHTML = "Eita! Não vai ser possível sacar!" + account[success] + " R$. Você não pode zerar a sua conta";
    }
}

function Logout() {
    document.getElementById("loginaccount").style.display = 'block';
    document.getElementById("formlogin").reset();
    document.getElementById("manageaccount").style.display = 'none';
            document.getElementById("content").style.display = 'none';
            document.getElementById("content2").style.display = 'none';
            document.getElementById("content3").style.display = 'none';
}
function Transfers(){
	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';
	var inputmoney = document.getElementById("moneynumber").value;
	inputmoney = parseInt(inputmoney);
	var input = document.getElementById("accountnumber").value;
	var k=0;
	for (i = 0; i < id.length; i++){		
	if ((input == id[i] && inputmoney>0 && account[success]-inputmoney>0)){
		k=1;
		account[success] -= inputmoney;
		prbalance=account[success];
		account[i] += inputmoney;
		document.getElementById("errortick").style.display = 'none';
		document.getElementById("balance").innerHTML = prbalance;
		document.getElementById("notification") .innerHTML= "Boa! Você transferiu "+inputmoney+" R$ para a conta "+id[i];
	}else{
		document.getElementById("errortick").style.display = 'block';
    	document.getElementById("notick").style.display = 'none';
	}

	}
}

function Change() {
	document.getElementById("changepass").style.display = 'block';
	document.getElementById("changeimg").style.display = 'block';
	document.getElementById("no").style.display = 'none';
	document.getElementById("notick").style.display = 'none';
    document.getElementById("errortick").style.display = 'none';
}
function Changepassword(){
	if (document.getElementById("passcurrent").value == password[success] && document.getElementById("passnew").value == document.getElementById("passnewrepeat").value) {
        password[success] = document.getElementById("passnew").value;
        document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';
	document.getElementById("notification") .innerHTML= "Agora você trocou sua senha!";
    } else {
    	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'none';
	document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification") .innerHTML= "Burro, errou a senha";
    }
}








