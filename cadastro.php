<?php
session_start();
$matricula = $_POST['matricula'];
$nome = $_POST['nome']; 
$email = $_POST['email']; 
$telefone = $_POST['telefone'];
$senha = $_POST['senha'];
$conexao = mysqli_connect('localhost', 'root', '', 'senai');

if (!$conexao) {
    die("Erro ao conectar ao banco de dados: " . mysqli_connect_error());
}

// Verificar se o jogo já existe na tabela 'novos'
$verificar_matricula = "SELECT COUNT(*) AS total FROM aluno WHERE matricula = ?";
$verificar_stmt = $conexao->prepare($verificar_matricula);
$verificar_stmt->bind_param("i", $matricula);
$verificar_stmt->execute();
$resultado = $verificar_stmt->get_result();
$row = $resultado->fetch_assoc();
$total_matricula = $row['total'];

if ($total_matricula > 0) {

        echo "matricula ja cadastrada para outro aluno: ";
    }
else {
    // Se o jogo não existe, insira um novo registro na tabela 'novos'
    $inserir_novo_aluno = "INSERT INTO aluno (matricula, nome, email, telefone, senha) VALUES (?, ?, ?, ?,?)";
    $inserir_stmt = $conexao->prepare($inserir_novo_aluno);
    $inserir_stmt->bind_param("sssss", $matricula, $nome, $email, $telefone, $senha);
    if ($inserir_stmt->execute()) {
        // Tentar criar o gatilho
        $criar_trigger = "CREATE TRIGGER after_insert_aluno
                          AFTER INSERT ON aluno
                          FOR EACH ROW
                          BEGIN
                              INSERT INTO aluno (matricula, nome, email, telefone, senha) VALUES (NEW.matricula, NEW.nome, NEW.email, NEW.telefone, NEW. senha);
                          END";
        try {
            $conexao->query($criar_trigger);
            echo "Aluno cadastrado com sucesso e trigger criado!";
        } catch (mysqli_sql_exception $e) {
            echo "Aluno cadastrado" ;
        }
    } else {
        echo "Erro ao inserir o novo Aluno: " . $conexao->error;
    }
}

// Redirecionar de volta para a página index.php após um certo tempo
echo '<script>
        setTimeout(function() {
            window.location.href = "home.html";
        }, 5000);
      </script>';
?>