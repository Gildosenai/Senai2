<?php
session_start();


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $matricula = $_POST['matricula'];
    $senha = $_POST['senha'];
    $conexao = mysqli_connect('localhost', 'root', '', 'senai');
    if (!$conexao) {
        die("Conexão falhou: " . mysqli_connect_error());
    }
    $consulta = "SELECT * FROM aluno WHERE matricula = ? AND senha = ?";
    $consulta2 = "SELECT * FROM funcionario WHERE matricula = ? AND senha = ?";
    $stmt = mysqli_prepare($conexao, $consulta);
    $stmt2 = mysqli_prepare($conexao, $consulta2);
    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ss", $matricula, $senha);
        if (mysqli_stmt_execute($stmt)) {
            mysqli_stmt_store_result($stmt);
            if (mysqli_stmt_num_rows($stmt) == 1) {
                header("Location: home.html");
                exit();
            } else {
                echo "<script>alert('Usuário  ou senha não cadastrado ou incorreto!'); window.location.href='index.html';</script>";
            }
        } else {
            echo "Erro ao autenticar usuário: " . mysqli_error($conexao);
        }
        mysqli_stmt_close($stmt);
    } else {
        echo "Erro na preparação da consulta: " . mysqli_error($conexao);
    }

    if ($stmt2) {
        mysqli_stmt_bind_param($stmt2, "ss", $matricula, $senha);
        if (mysqli_stmt_execute($stmt2)) {
            mysqli_stmt_store_result($stmt2);
            if (mysqli_stmt_num_rows($stmt2) == 1) {
                header("Location: homef.html");
                exit();
            } else {
                echo "<script>alert('Usuário  ou senha não cadastrado ou incorreto!'); window.location.href='index.html';</script>";
            }
        } else {
            echo "Erro ao autenticar usuário: " . mysqli_error($conexao);
        }
        mysqli_stmt_close($stmt2);
    } else {
        echo "Erro na preparação da consulta: " . mysqli_error($conexao);
    }
    mysqli_close($conexao);
}
?>