const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyuM_RWc9nSHyO-P3HltSigGPZi9djxKq8S9cms7TdFhEsRCNPZeCJXD7bYMiC8J6hqJA/exec";
const LOGIN_CHAVE = "stellantisUsuarioLogado";

const seletorSetor = document.getElementById("setor-dashboard");
const usuarioDashboard = document.getElementById("usuario-dashboard");
const papelDashboard = document.getElementById("papel-dashboard");
const fotoUsuarioDashboard = document.getElementById("foto-usuario-dashboard");
const iconeUsuarioDashboard = document.getElementById("icone-usuario-dashboard");
const conteudoDashboard = document.getElementById("dashboard-conteudo");
const acessoNegado = document.getElementById("dashboard-acesso-negado");
const tituloSetor = document.getElementById("titulo-setor");
const statusDashboard = document.getElementById("dashboard-status");
const dashboardShell = document.querySelector(".dashboard-shell");
const bloqueioCarregamentoDashboard = document.getElementById("bloqueio-carregamento-dashboard");
const totalHoras = document.getElementById("total-horas-dashboard");
const totalTfms = document.getElementById("total-tfms-dashboard");
const totalColaboradores = document.getElementById("total-colaboradores-dashboard");
const totalHorasPadrao = document.getElementById("total-horas-padrao-dashboard");
const totalHorasDisponiveis = document.getElementById("total-horas-disponiveis-dashboard");
const totalTfmsAbertos = document.getElementById("total-tfms-abertos-dashboard");
const totalHorasAndamento = document.getElementById("total-horas-andamento-dashboard");
const percentualTempoPadrao = document.getElementById("percentual-tempo-padrao-dashboard");
const percentualDisponibilidade = document.getElementById("percentual-disponibilidade-dashboard");
const medidorTempoPadrao = document.getElementById("medidor-tempo-padrao-dashboard");
const medidorDisponibilidade = document.getElementById("medidor-disponibilidade-dashboard");
const filtroNomeVisaoGeral = document.getElementById("filtro-nome-visao-geral");
const filtroMesVisaoGeral = document.getElementById("filtro-mes-visao-geral");
const filtroTurnoVisaoGeral = document.getElementById("filtro-turno-visao-geral");
const filtroAtividadeVisaoGeral = document.getElementById("filtro-atividade-visao-geral");
const rankingAtividades = document.getElementById("ranking-atividades");
const rankingAtividadesCompleto = document.getElementById("ranking-atividades-completo");
const tabelaEquipe = document.getElementById("tabela-equipe");
const totalEquipe = document.getElementById("total-equipe-dashboard");
const tabelaTfms = document.getElementById("tabela-tfms");
const tabelaDisponibilidade = document.getElementById("tabela-disponibilidade");
const tabelaDivergencias = document.getElementById("tabela-divergencias");
const filtroEquipe = document.getElementById("filtro-equipe-dashboard");
const ordenarEquipe = document.getElementById("ordenar-equipe-dashboard");
const filtroInicioEquipe = document.getElementById("filtro-inicio-equipe-dashboard");
const filtroFimEquipe = document.getElementById("filtro-fim-equipe-dashboard");
const filtroDisponibilidade = document.getElementById("filtro-disponibilidade-dashboard");
const filtroDataDisponibilidade = document.getElementById("filtro-data-disponibilidade-dashboard");
const filtroDivergencias = document.getElementById("filtro-divergencias-dashboard");
const resumoColaborador = document.getElementById("resumo-colaborador-dashboard");
const resumoDisponibilidade = document.getElementById("resumo-disponibilidade-dashboard");
const resumoDivergencias = document.getElementById("resumo-divergencias-dashboard");
const calendarioColaborador = document.getElementById("calendario-colaborador-dashboard");
const filtroInicioCalendario = document.getElementById("filtro-inicio-calendario-dashboard");
const filtroFimCalendario = document.getElementById("filtro-fim-calendario-dashboard");
const filtroCalendario = document.getElementById("filtro-calendario-dashboard");
const btnMesAnteriorCalendario = document.getElementById("btn-mes-anterior-calendario");
const btnProximoMesCalendario = document.getElementById("btn-proximo-mes-calendario");
const periodoCalendario = document.getElementById("periodo-calendario-dashboard");
const mesCalendario = document.getElementById("mes-calendario-dashboard");
const resumoCalendario = document.getElementById("resumo-calendario-dashboard");
const calendarioGeral = document.getElementById("calendario-geral-dashboard");
const tabelaTemposPadrao = document.getElementById("tabela-tempos-padrao-dashboard");
const relatorioResumo = document.getElementById("relatorio-resumo");
const formConsultarTfm = document.getElementById("form-consultar-tfm-dashboard");
const consultaTfmInput = document.getElementById("consulta-tfm-dashboard");
const resultadoConsultaTfm = document.getElementById("resultado-consulta-tfm-dashboard");
const navegacaoDashboard = document.querySelectorAll("[data-dashboard-view]");
const visoesDashboard = document.querySelectorAll("[data-dashboard-content]");
const navConfiguracoes = document.getElementById("nav-configuracoes");
const fotoPerfilDashboard = document.getElementById("foto-perfil-dashboard");
const iconePerfilDashboard = document.getElementById("icone-perfil-dashboard");
const inputFotoPerfil = document.getElementById("input-foto-perfil-dashboard");
const btnRemoverFotoPerfil = document.getElementById("btn-remover-foto-perfil");
const perfilNomeDashboard = document.getElementById("perfil-nome-dashboard");
const perfilMatriculaDashboard = document.getElementById("perfil-matricula-dashboard");
const perfilCargoDashboard = document.getElementById("perfil-cargo-dashboard");
const btnCentralAjuda = document.getElementById("btn-central-ajuda");
const centralAjuda = document.getElementById("central-ajuda");
const btnFecharCentralAjuda = document.getElementById("btn-fechar-central-ajuda");
const conversaCentralAjuda = document.getElementById("central-ajuda-conversa");
const painelTfmsDia = document.getElementById("painel-tfms-dia");
const tituloPainelTfmsDia = document.getElementById("titulo-painel-tfms-dia");
const conteudoPainelTfmsDia = document.getElementById("conteudo-painel-tfms-dia");
const btnFecharPainelTfmsDia = document.getElementById("btn-fechar-painel-tfms-dia");

let sessaoAtual = null;
let dadosDashboardAtual = null;
const respostasAjuda = {
    divergencias: "Abra Divergências no menu lateral, selecione um colaborador e confira por dia as horas lançadas, disponíveis, excedentes e os TFMs envolvidos.",
    calendario: "Abra Calendário e ajuste os campos Início e Fim. Por padrão, o painel mostra o mês mais recente com dados.",
    atualizar: "Use o botão Atualizar no topo do dashboard para buscar novamente os dados centralizados da planilha.",
    perfil: "Abra Configurações, escolha Adicionar foto e selecione uma imagem PNG, JPG ou WEBP de até 2 MB. Ela será exibida ao lado do seu nome.",
    dados: "Confirme o setor no topo e atualize o painel. Se continuar vazio, verifique se a aba correspondente na planilha central possui dados sincronizados."
};

function obterSessaoLocal() {
    try {
        return JSON.parse(localStorage.getItem(LOGIN_CHAVE));
    } catch (erro) {
        return null;
    }
}

function formatarHoras(valor) {
    return `${Number(valor || 0).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}h`;
}

function nomeSetor(setor) {
    return setor === "Transmissoes" ? "Transmissões" : setor;
}

function mostrarAcessoNegado() {
    conteudoDashboard.hidden = true;
    acessoNegado.hidden = false;
}

function alternarBloqueioCarregamento(ativo) {
    bloqueioCarregamentoDashboard.hidden = !ativo;
    dashboardShell.inert = ativo;
    document.querySelector(".btn-central-ajuda").inert = ativo;
    centralAjuda.inert = ativo;
}

function obterChaveFotoPerfil() {
    return `stellantisFotoPerfil:${sessaoAtual?.matricula || "usuario"}`;
}

function atualizarFotoPerfil(foto = localStorage.getItem(obterChaveFotoPerfil())) {
    const possuiFoto = Boolean(foto);
    [fotoUsuarioDashboard, fotoPerfilDashboard].forEach((imagem) => {
        imagem.hidden = !possuiFoto;
        if (possuiFoto) imagem.src = foto;
        else imagem.removeAttribute("src");
    });
    [iconeUsuarioDashboard, iconePerfilDashboard].forEach((icone) => {
        icone.hidden = possuiFoto;
    });
    btnRemoverFotoPerfil.hidden = !possuiFoto;
}

function renderizarPerfil() {
    perfilNomeDashboard.textContent = sessaoAtual.nome || "-";
    perfilMatriculaDashboard.textContent = sessaoAtual.matricula || "-";
    perfilCargoDashboard.textContent = sessaoAtual.papel || "-";
    atualizarFotoPerfil();
}

async function validarSessao() {
    const sessao = obterSessaoLocal();
    if (!sessao?.token) {
        mostrarAcessoNegado();
        return false;
    }

    const resposta = await fetch(`${SCRIPT_URL}?acao=validarSessao&token=${encodeURIComponent(sessao.token)}`);
    const dados = await resposta.json();
    if (!resposta.ok || !dados.sucesso || !dados.usuario) {
        localStorage.removeItem(LOGIN_CHAVE);
        mostrarAcessoNegado();
        return false;
    }

    sessaoAtual = { ...dados.usuario, token: sessao.token };
    if (!["lider", "gestor", "administrador"].includes(sessaoAtual.papel)) {
        mostrarAcessoNegado();
        return false;
    }

    usuarioDashboard.textContent = sessaoAtual.nome;
    papelDashboard.textContent = sessaoAtual.papel;
    navConfiguracoes.hidden = false;
    renderizarPerfil();
    if (sessaoAtual.papel === "lider") {
        seletorSetor.innerHTML = `<option value="${sessaoAtual.equipe === "Motores" ? "Motores" : "Transmissoes"}">${sessaoAtual.equipe}</option>`;
    }
    conteudoDashboard.hidden = false;
    return true;
}

function renderizarAtividades(atividades, container = rankingAtividades) {
    container.innerHTML = "";
    if (!atividades.length) {
        container.innerHTML = '<p class="vazio">Nenhuma atividade encontrada neste setor.</p>';
        return;
    }

    const maiorHora = atividades[0].horas || 1;
    atividades.forEach((item) => {
        const linha = document.createElement("div");
        linha.className = "ranking-item";
        const nome = document.createElement("span");
        nome.textContent = item.atividade;
        const barra = document.createElement("div");
        barra.className = "barra";
        const preenchimento = document.createElement("div");
        preenchimento.style.width = `${Math.max(2, (item.horas / maiorHora) * 100)}%`;
        barra.appendChild(preenchimento);
        const horas = document.createElement("strong");
        horas.textContent = formatarHoras(item.horas);
        linha.append(nome, barra, horas);
        container.appendChild(linha);
    });
}

function preencherFiltroVisaoGeral(filtro, valores, rotuloPadrao, formatador = (valor) => valor) {
    const valorAtual = filtro.value;
    filtro.innerHTML = `<option value="">${rotuloPadrao}</option>`;
    [...new Set(valores.filter(Boolean))].sort((primeiro, segundo) => String(primeiro).localeCompare(String(segundo), "pt-BR")).forEach((valor) => {
        const opcao = document.createElement("option");
        opcao.value = valor;
        opcao.textContent = formatador(valor);
        filtro.appendChild(opcao);
    });
    filtro.value = [...filtro.options].some((opcao) => opcao.value === valorAtual) ? valorAtual : "";
}

function preencherFiltrosVisaoGeral(dados) {
    const lancamentos = dados.lancamentos || [];
    preencherFiltroVisaoGeral(filtroNomeVisaoGeral, lancamentos.map((item) => item.nome), "Toda a equipe");
    preencherFiltroVisaoGeral(filtroMesVisaoGeral, lancamentos.map((item) => normalizarDataIso(item.data).slice(0, 7)), "Todos os meses", (mes) => {
        const data = criarDataUtc(`${mes}-01`);
        return data ? new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" }).format(data) : mes;
    });
    preencherFiltroVisaoGeral(filtroTurnoVisaoGeral, lancamentos.map((item) => item.turno), "Todos os turnos");
    preencherFiltroVisaoGeral(filtroAtividadeVisaoGeral, lancamentos.map((item) => item.atividade), "Todas as atividades");
}

function classificarMedidor(percentual, tipo) {
    if (tipo === "disponibilidade") {
        if (percentual < 70 || percentual >= 95) return "vermelho";
        if (percentual < 75 || percentual >= 90) return "amarelo";
        return "verde";
    }
    if (percentual >= 95) return "verde";
    if (percentual >= 80) return "amarelo";
    return "vermelho";
}

function atualizarMedidor(elemento, texto, percentual, tipo) {
    elemento.textContent = texto;
    const medidor = elemento.closest(".medidor");
    medidor.classList.remove("verde", "amarelo", "vermelho");
    medidor.classList.add(classificarMedidor(percentual, tipo));
    medidor.style.setProperty("--progresso", `${Math.min(Math.max(percentual, 0), 100)}%`);
}

function obterChavesColaboradores(registros) {
    const chaves = new Set();
    registros.forEach((item) => {
        const matricula = String(item.matricula || "").trim();
        const nome = normalizarNome(item.nome);
        if (matricula) chaves.add(`matricula:${matricula}`);
        if (nome) chaves.add(`nome:${nome}`);
    });
    return chaves;
}

function somarDisponibilidadeDosColaboradores(dados, colaboradores) {
    const chavesColaboradores = obterChavesColaboradores(colaboradores);
    return (dados.disponibilidade || []).reduce((total, item) => {
        const matricula = String(item.matricula || "").trim();
        const nome = normalizarNome(item.nome);
        const pertenceAoColaborador = (matricula && chavesColaboradores.has(`matricula:${matricula}`))
            || (nome && chavesColaboradores.has(`nome:${nome}`));
        return pertenceAoColaborador && deveConsiderarDisponibilidade(item)
            ? total + obterHorasDisponiveisValidas(item.horasDisponiveis)
            : total;
    }, 0);
}

function obterHorasDisponiveisDosLancamentos(dados, lancamentos) {
    return somarDisponibilidadeDosColaboradores(dados, lancamentos);
}

function renderizarVisaoGeral(dados) {
    const lancamentos = (dados.lancamentos || []).filter((item) => {
        const data = normalizarDataIso(item.data);
        return (!filtroNomeVisaoGeral.value || item.nome === filtroNomeVisaoGeral.value)
            && (!filtroMesVisaoGeral.value || data.startsWith(filtroMesVisaoGeral.value))
            && (!filtroTurnoVisaoGeral.value || item.turno === filtroTurnoVisaoGeral.value)
            && (!filtroAtividadeVisaoGeral.value || item.atividade === filtroAtividadeVisaoGeral.value);
    });
    const tfmsDistintos = new Set(lancamentos.map((item) => item.tfm).filter(Boolean));
    const resumoPorTfm = new Map((dados.resumoTfms || []).map((item) => [String(item.tfm || "").trim(), item]));
    const totalHorasFiltradas = [...tfmsDistintos]
        .map((tfm) => resumoPorTfm.get(tfm))
        .filter(Boolean)
        .reduce((total, item) => total + Number(item.horas || 0), 0);
    const totalPadraoFiltrado = [...tfmsDistintos]
        .map((tfm) => resumoPorTfm.get(tfm))
        .filter(Boolean)
        .reduce((total, item) => total + Number(item.horasPadrao || 0), 0);
    const colaboradoresDistintos = new Set(lancamentos.map((item) => String(item.matricula || "").trim() || normalizarNome(item.nome)).filter(Boolean));
    const horasDisponiveisFiltradas = obterHorasDisponiveisDosLancamentos(dados, lancamentos);
    const tfmsAbertosFiltrados = (dados.detalhesTfmsEmAndamento || dados.tfmsAbertos || []).filter((item) => {
        const data = normalizarDataIso(item.inicio);
        return (!filtroNomeVisaoGeral.value || item.responsavel === filtroNomeVisaoGeral.value)
            && (!filtroMesVisaoGeral.value || !data || data.startsWith(filtroMesVisaoGeral.value))
            && (!filtroTurnoVisaoGeral.value || item.turno === filtroTurnoVisaoGeral.value)
            && (!filtroAtividadeVisaoGeral.value || item.atividade === filtroAtividadeVisaoGeral.value);
    });
    const horasAndamento = tfmsAbertosFiltrados.reduce((total, item) => total + Number(item.horas || 0) + Number(item.horasAdicionais || 0), 0);
    const percentualPadrao = totalHorasFiltradas ? (totalPadraoFiltrado / totalHorasFiltradas) * 100 : 0;
    const percentualDisponiveis = horasDisponiveisFiltradas ? (totalHorasFiltradas / horasDisponiveisFiltradas) * 100 : 0;
    totalHoras.textContent = formatarHoras(totalHorasFiltradas);
    totalHorasPadrao.textContent = formatarHoras(totalPadraoFiltrado);
    totalHorasDisponiveis.textContent = formatarHoras(horasDisponiveisFiltradas);
    totalTfms.textContent = tfmsDistintos.size.toLocaleString("pt-BR");
    totalColaboradores.textContent = colaboradoresDistintos.size.toLocaleString("pt-BR");
    totalTfmsAbertos.textContent = new Set(tfmsAbertosFiltrados.map((item) => item.tfm).filter(Boolean)).size.toLocaleString("pt-BR");
    totalHorasAndamento.textContent = formatarHoras(horasAndamento);
    atualizarMedidor(percentualTempoPadrao, percentualPadrao.toLocaleString("pt-BR", { maximumFractionDigits: 1 }), percentualPadrao, "padrao");
    atualizarMedidor(percentualDisponibilidade, percentualDisponiveis.toLocaleString("pt-BR", { maximumFractionDigits: 1 }), percentualDisponiveis, "disponibilidade");
    const atividades = [...lancamentos.reduce((resultado, item) => resultado.set(item.atividade, (resultado.get(item.atividade) || 0) + Number(item.horas || 0)), new Map()).entries()]
        .map(([atividade, horas]) => ({ atividade, horas }))
        .sort((primeiro, segundo) => segundo.horas - primeiro.horas)
        .slice(0, 8);
    renderizarAtividades(atividades);
}

function formatarData(valor) {
    const data = criarDataUtc(valor);
    return data ? data.toLocaleDateString("pt-BR", { timeZone: "UTC" }) : String(valor || "-");
}

function dataHoje() {
    const agora = new Date();
    const partes = new Intl.DateTimeFormat("en-US", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(agora);
    const valor = (tipo) => partes.find((parte) => parte.type === tipo)?.value;
    return `${valor("year")}-${valor("month")}-${valor("day")}`;
}

function calcularDiasEmAndamento(dataInicio) {
    const inicio = criarDataUtc(dataInicio);
    const hoje = criarDataUtc(dataHoje());
    if (!inicio || !hoje || inicio > hoje) return "-";
    const dias = Math.floor((hoje - inicio) / 86400000);
    return `${dias} dia${dias === 1 ? "" : "s"}`;
}

function normalizarDataIso(valor) {
    const texto = String(valor || "").trim();
    const iso = texto.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
    const separado = texto.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (!separado) return "";
    const primeiroNumero = Number(separado[1]);
    const segundoNumero = Number(separado[2]);
    const mes = primeiroNumero > 12 ? segundoNumero : primeiroNumero;
    const dia = primeiroNumero > 12 ? primeiroNumero : segundoNumero;
    return `${separado[3]}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
}

function criarDataUtc(valor) {
    const dataIso = normalizarDataIso(valor);
    if (!dataIso) return null;
    const data = new Date(`${dataIso}T00:00:00Z`);
    return Number.isNaN(data.getTime()) ? null : data;
}

function normalizarNome(valor) {
    return String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
}

function deveConsiderarDisponibilidade(item) {
    return seletorSetor.value !== "Transmissoes" || normalizarNome(item.nome) !== "anderson parreiras";
}

function obterHorasDisponiveisValidas(valor) {
    const horas = Number(valor || 0);
    return Number.isFinite(horas) && horas >= 0 && horas <= 24 ? horas : 0;
}

function obterDataMaisRecenteDisponibilidade(dados) {
    const totaisPorData = new Map();
    (dados.disponibilidade || []).forEach((item) => {
        const data = normalizarDataIso(item.data);
        if (!data) return;
        totaisPorData.set(data, (totaisPorData.get(data) || 0) + obterHorasDisponiveisValidas(item.horasDisponiveis));
    });

    return [...totaisPorData.entries()]
        .filter(([, horas]) => horas > 0)
        .map(([data]) => data)
        .sort()
        .at(-1) || "";
}

function obterHorasDisponiveisColaborador(dados, colaborador, data) {
    return (dados.disponibilidade || [])
        .map((item) => ({ ...item, data: normalizarDataIso(item.data) }))
        .filter((item) => item.data === data && deveConsiderarDisponibilidade(item) && (item.matricula === colaborador.matricula || normalizarNome(item.nome) === normalizarNome(colaborador.nome)))
        .reduce((total, item) => total + obterHorasDisponiveisValidas(item.horasDisponiveis), 0);
}

function obterHorasDisponiveisAcumuladas(dados, colaboradores) {
    return somarDisponibilidadeDosColaboradores(dados, colaboradores);
}

function obterDisponibilidadeAtualEquipe(dados) {
    const colaboradores = dados.colaboradores || [];
    const datasLancamento = colaboradores
        .flatMap((colaborador) => colaborador.dias || [])
        .map((dia) => normalizarDataIso(dia.data))
        .filter(Boolean)
        .sort();
    const dataInicio = datasLancamento[0];
    if (!dataInicio) return 0;

    return (dados.disponibilidade || [])
        .map((item) => ({ ...item, data: normalizarDataIso(item.data) }))
        .filter((item) => deveConsiderarDisponibilidade(item) && item.data >= dataInicio && colaboradores.some((colaborador) => (
            item.matricula === colaborador.matricula
            || normalizarNome(item.nome) === normalizarNome(colaborador.nome)
        )))
        .reduce((total, item) => total + obterHorasDisponiveisValidas(item.horasDisponiveis), 0);
}

function renderizarTabela(container, cabecalhos, linhas) {
    container.innerHTML = "";
    if (!linhas.length) {
        container.innerHTML = '<p class="vazio">Nenhum dado encontrado neste setor.</p>';
        return;
    }

    const tabela = document.createElement("table");
    const cabecalho = document.createElement("thead");
    const linhaCabecalho = document.createElement("tr");
    cabecalhos.forEach((titulo) => {
        const coluna = document.createElement("th");
        coluna.textContent = titulo;
        linhaCabecalho.appendChild(coluna);
    });
    cabecalho.appendChild(linhaCabecalho);
    const corpo = document.createElement("tbody");
    linhas.forEach((linha) => {
        const linhaTabela = document.createElement("tr");
        linha.forEach((valor) => {
            const celula = document.createElement("td");
            celula.textContent = valor;
            linhaTabela.appendChild(celula);
        });
        corpo.appendChild(linhaTabela);
    });
    tabela.append(cabecalho, corpo);
    container.appendChild(tabela);
}

function renderizarDadosSecundarios(dados) {
    renderizarTabela(tabelaEquipe, ["Colaborador", "Matrícula", "Horas", "TFMs", "Horas em andamento", "Disponíveis acumuladas", "Último lançamento"], (dados.colaboradores || []).map((item) => [
        item.nome,
        item.matricula || "-",
        formatarHoras(item.horas),
        item.tfms,
        formatarHoras(obterHorasEmAndamentoColaborador(dados, item)),
        formatarHoras(obterHorasDisponiveisAcumuladas(dados, [item])),
        formatarData(item.ultimaData)
    ]));
    renderizarTabela(tabelaTfms, ["TFM", "Responsável", "Início", "Dias em andamento", "Horas"], (dados.tfmsAbertos || []).map((item) => [
        item.tfm,
        item.responsavel,
        formatarData(item.inicio),
        calcularDiasEmAndamento(item.inicio),
        formatarHoras(item.horas)
    ]));
    renderizarDisponibilidade(dados);
    renderizarTabela(tabelaTemposPadrao, ["Atividade", "Tempo padrão"], (dados.temposPadraoAtividades || []).map((item) => [item.atividade, formatarHoras(item.tempoPadrao)]));
    relatorioResumo.innerHTML = "";
    [
        ["Horas registradas", formatarHoras(dados.totalHoras)],
        ["TFMs únicos", Number(dados.totalTfms || 0).toLocaleString("pt-BR")],
        ["Lançamentos", Number(dados.totalRegistros || 0).toLocaleString("pt-BR")],
        ["Colaboradores ativos", Number((dados.colaboradores || []).length).toLocaleString("pt-BR")]
    ].forEach(([rotulo, valor]) => {
        const item = document.createElement("div");
        item.innerHTML = `<span>${rotulo}</span><strong>${valor}</strong>`;
        relatorioResumo.appendChild(item);
    });
}

function preencherFiltrosColaborador(colaboradores) {
    [filtroEquipe, filtroDisponibilidade, filtroCalendario, filtroDivergencias].forEach((filtro) => {
        const valorAtual = filtro.value;
        const rotuloPadrao = filtro === filtroEquipe
            ? "Visão de toda a equipe"
            : filtro === filtroDivergencias
                ? "Selecione um colaborador"
                : filtro === filtroCalendario
                    ? "Equipe unificada"
                    : "Toda a equipe";
        filtro.innerHTML = `<option value="">${rotuloPadrao}</option>`;
        colaboradores.forEach((colaborador, indice) => {
            const opcao = document.createElement("option");
            opcao.value = String(indice);
            opcao.textContent = colaborador.nome;
            filtro.appendChild(opcao);
        });
        filtro.value = [...filtro.options].some((opcao) => opcao.value === valorAtual) ? valorAtual : "";
    });
}

function obterClasseHorasCalendario(horas) {
    const metaDiaria = 8.8;
    const totalHoras = Number(horas || 0);
    if (totalHoras <= metaDiaria) return "dia-calendario-abaixo-meta";

    const excesso = Math.min((totalHoras - metaDiaria) / metaDiaria, 1);
    return `dia-calendario-acima-meta intensidade-${Math.round(excesso * 4) + 1}`;
}

function renderizarCalendarioGeral() {
    const indice = filtroCalendario.value;
    const colaboradores = indice === "" ? (dadosDashboardAtual?.colaboradores || []) : [dadosDashboardAtual?.colaboradores?.[Number(indice)]].filter(Boolean);
    const dataInicio = filtroInicioCalendario.value;
    const dataFim = filtroFimCalendario.value;
    const diasPorData = new Map();
    const chavesColaboradores = obterChavesColaboradores(colaboradores);
    const disponibilidadePorData = new Map();

    (dadosDashboardAtual?.disponibilidade || []).forEach((item) => {
        const data = normalizarDataIso(item.data);
        const matricula = String(item.matricula || "").trim();
        const nome = normalizarNome(item.nome);
        const pertenceAoColaborador = (matricula && chavesColaboradores.has(`matricula:${matricula}`))
            || (nome && chavesColaboradores.has(`nome:${nome}`));
        if (!data || !pertenceAoColaborador || !deveConsiderarDisponibilidade(item)) return;
        disponibilidadePorData.set(data, (disponibilidadePorData.get(data) || 0) + obterHorasDisponiveisValidas(item.horasDisponiveis));
    });

    if (dataInicio && dataFim) {
        for (let data = criarDataUtc(dataInicio), fim = criarDataUtc(dataFim); data && fim && data <= fim; data.setUTCDate(data.getUTCDate() + 1)) {
            const dataIso = data.toISOString().slice(0, 10);
            diasPorData.set(dataIso, { data: dataIso, horas: 0, horasPadrao: 0, horasDisponiveis: disponibilidadePorData.get(dataIso) || 0, tfmNumeros: new Set(), colaboradores: [] });
        }
    }

    colaboradores.flatMap((colaborador) => (colaborador.dias || []).map((dia) => ({
        ...dia,
        data: normalizarDataIso(dia.data),
        nome: colaborador.nome,
        matricula: colaborador.matricula,
        tfmNumeros: [...obterHorasPorTfmDoDia(dia.data, colaborador).keys()]
    })))
        .filter((dia) => dia.data && Number(dia.horas || 0) > 0)
        .filter((dia) => (!dataInicio || dia.data >= dataInicio) && (!dataFim || dia.data <= dataFim))
        .forEach((dia) => {
            if (!diasPorData.has(dia.data)) diasPorData.set(dia.data, { data: dia.data, horas: 0, horasPadrao: 0, horasDisponiveis: disponibilidadePorData.get(dia.data) || 0, tfmNumeros: new Set(), colaboradores: [] });
            const resumo = diasPorData.get(dia.data);
            resumo.horas += Number(dia.horas || 0);
            resumo.horasPadrao += Number(dia.horasPadrao || 0);
            (dia.tfmNumeros || []).forEach((tfm) => resumo.tfmNumeros.add(tfm));
            resumo.colaboradores.push(dia);
        });
    const dias = [...diasPorData.values()]
        .map((dia) => ({ ...dia, tfmNumeros: [...dia.tfmNumeros].sort() }))
        .sort((primeira, segunda) => primeira.data.localeCompare(segunda.data));
    const totalHoras = dias.reduce((total, dia) => total + Number(dia.horas || 0), 0);
    const totalTfms = dias.reduce((total, dia) => total + dia.tfmNumeros.length, 0);
    resumoCalendario.innerHTML = [
        criarIndicador("Dias exibidos", dias.length),
        criarIndicador("Horas trabalhadas", formatarHoras(totalHoras)),
        criarIndicador("TFMs no período", totalTfms)
    ].join("");
    const cartoesDias = dias.map((dia, indiceDia) => {
        const horasReferencia = indice === "" ? dia.horas / dia.colaboradores.length : dia.horas;
        const semHorasComDisponibilidade = !dia.horas && dia.horasDisponiveis > 0;
        const semRegistro = !dia.horas && !dia.horasDisponiveis;
        const classe = semHorasComDisponibilidade
            ? "dia-calendario-disponivel-sem-registro"
            : semRegistro
                ? "dia-calendario-sem-registro"
                : obterClasseHorasCalendario(horasReferencia);
        const detalhes = semHorasComDisponibilidade
            ? `<span>Sem horas registradas</span><span>${formatarHoras(dia.horasDisponiveis)} disponíveis</span>`
            : semRegistro
                ? "<span>Sem registros</span>"
                : `<span>${indice === "" ? `${dia.colaboradores.length} colaborador(es)` : dia.colaboradores[0].nome}</span><span>${formatarHoras(dia.horas)} trabalhadas</span><span>${dia.tfmNumeros.length} TFM(s)</span>`;
        return `<button class="dia-calendario ${classe}" type="button" data-dia-equipe="${indiceDia}"><strong>${formatarData(dia.data)}</strong>${detalhes}</button>`;
    }).join("");
    const primeiroDia = criarDataUtc(dias[0]?.data);
    const quantidadeEspacos = primeiroDia ? (primeiroDia.getUTCDay() + 6) % 7 : 0;
    const espacosIniciais = '<span class="espaco-calendario" aria-hidden="true"></span>'.repeat(quantidadeEspacos);
    const cabecalhoSemana = ["S", "T", "Q", "Q", "S", "S", "D"].map((dia) => `<span>${dia}</span>`).join("");
    calendarioGeral.innerHTML = dias.length
        ? `<div class="calendario-semana" aria-hidden="true">${cabecalhoSemana}</div><div class="calendario-mensal">${espacosIniciais}${cartoesDias}</div>`
        : '<p class="vazio">Nenhum lançamento encontrado para os filtros selecionados.</p>';
    calendarioGeral.querySelectorAll("[data-dia-equipe]").forEach((botao) => botao.addEventListener("click", () => abrirPainelTfmsEquipe(dias[Number(botao.dataset.diaEquipe)])));
}

function definirPeriodoInicialCalendario(dados) {
    if (filtroInicioCalendario.value || filtroFimCalendario.value) return;

    const dataMaisRecente = (dados.colaboradores || [])
        .flatMap((colaborador) => colaborador.dias || [])
        .map((dia) => normalizarDataIso(dia.data))
        .filter(Boolean)
        .sort()
        .at(-1);

    if (!dataMaisRecente) return;

    definirMesCalendario(dataMaisRecente);
}

function definirMesCalendario(data) {
    const dataNormalizada = normalizarDataIso(data);
    if (!dataNormalizada) return;
    const [ano, mes] = dataNormalizada.split("-").map(Number);
    const ultimoDia = new Date(Date.UTC(ano, mes, 0)).getUTCDate();
    filtroInicioCalendario.value = `${ano}-${String(mes).padStart(2, "0")}-01`;
    filtroFimCalendario.value = `${ano}-${String(mes).padStart(2, "0")}-${String(ultimoDia).padStart(2, "0")}`;
    periodoCalendario.textContent = `${formatarData(filtroInicioCalendario.value)} a ${formatarData(filtroFimCalendario.value)}`;
    mesCalendario.textContent = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" }).format(criarDataUtc(filtroInicioCalendario.value));
}

function mudarMesCalendario(deslocamento) {
    const referencia = criarDataUtc(filtroInicioCalendario.value);
    if (!referencia) return;
    referencia.setUTCMonth(referencia.getUTCMonth() + deslocamento);
    definirMesCalendario(referencia.toISOString().slice(0, 10));
    renderizarCalendarioGeral();
}

function criarIndicador(rotulo, valor) {
    return `<article><span>${rotulo}</span><strong>${valor}</strong></article>`;
}

function obterInicioSemana(data) {
    const referencia = criarDataUtc(data);
    if (!referencia) return "";
    referencia.setUTCDate(referencia.getUTCDate() - ((referencia.getUTCDay() + 6) % 7));
    return referencia.toISOString().slice(0, 10);
}

function adicionarDias(data, quantidade) {
    const resultado = criarDataUtc(data);
    if (!resultado) return "";
    resultado.setUTCDate(resultado.getUTCDate() + quantidade);
    return resultado.toISOString().slice(0, 10);
}

function obterHorasPorTfmDoDia(data, colaborador) {
    const dataNormalizada = normalizarDataIso(data);
    const matricula = String(colaborador.matricula || "").trim();
    const nome = normalizarNome(colaborador.nome);
    return (dadosDashboardAtual?.lancamentos || [])
        .filter((lancamento) => {
            const pertenceAoColaborador = (matricula && String(lancamento.matricula || "").trim() === matricula)
                || (!matricula && nome && normalizarNome(lancamento.nome) === nome);
            return normalizarDataIso(lancamento.data) === dataNormalizada && pertenceAoColaborador && Number(lancamento.horas || 0) > 0;
        })
        .reduce((resultado, lancamento) => {
            const tfm = String(lancamento.tfm || "-").trim() || "-";
            resultado.set(tfm, (resultado.get(tfm) || 0) + Number(lancamento.horas || 0));
            return resultado;
        }, new Map());
}

function abrirPainelTfmsDia(colaborador, dia) {
    tituloPainelTfmsDia.textContent = `${colaborador.nome} - ${formatarData(dia.data)}`;
    const horasPorTfm = obterHorasPorTfmDoDia(dia.data, colaborador);
    const tfms = [...horasPorTfm.entries()];
    conteudoPainelTfmsDia.innerHTML = `<p class="painel-resumo">${formatarHoras(dia.horas)} registradas em ${tfms.length} TFM(s).</p>${tfms.length ? `<div class="lista-tfms-dia">${tfms.map(([tfm, horas]) => `<span><i class="bi bi-clipboard-check"></i> TFM ${tfm}<strong>${formatarHoras(horas)}</strong></span>`).join("")}</div>` : '<p class="vazio">Nenhum TFM informado neste dia.</p>'}`;
    painelTfmsDia.hidden = false;
    btnFecharPainelTfmsDia.focus();
}

function abrirPainelTfmsEquipe(dia) {
    const chaveColaborador = (colaborador) => {
        const matricula = String(colaborador.matricula || "").trim();
        return matricula ? `matricula:${matricula}` : `nome:${normalizarNome(colaborador.nome)}`;
    };
    const indiceColaborador = filtroCalendario.value;
    const colaboradorSelecionado = indiceColaborador === "" ? null : dadosDashboardAtual?.colaboradores?.[Number(indiceColaborador)];
    const chavesVisualizacao = colaboradorSelecionado ? new Set([chaveColaborador(colaboradorSelecionado)]) : null;
    tituloPainelTfmsDia.textContent = `${colaboradorSelecionado?.nome || "Equipe"} - ${formatarData(dia.data)}`;
    const chavesComLancamento = new Set(dia.colaboradores.map(chaveColaborador));
    const disponibilidadePorColaborador = new Map();
    (dadosDashboardAtual?.disponibilidade || []).forEach((registro) => {
        if (normalizarDataIso(registro.data) !== dia.data || !deveConsiderarDisponibilidade(registro)) return;
        const horasDisponiveis = obterHorasDisponiveisValidas(registro.horasDisponiveis);
        if (!horasDisponiveis) return;
        const chave = chaveColaborador(registro);
        if (chavesVisualizacao && !chavesVisualizacao.has(chave)) return;
        const resumo = disponibilidadePorColaborador.get(chave) || { nome: registro.nome, horas: 0 };
        resumo.horas += horasDisponiveis;
        disponibilidadePorColaborador.set(chave, resumo);
    });
    const disponiveisSemLancamento = [...disponibilidadePorColaborador.entries()]
        .filter(([chave]) => !chavesComLancamento.has(chave))
        .map(([, colaborador]) => `- ${colaborador.nome} ${formatarHoras(colaborador.horas)}`);
    const lancamentosSemDisponibilidade = dia.colaboradores
        .filter((colaborador) => !disponibilidadePorColaborador.has(chaveColaborador(colaborador)))
        .map((colaborador) => `- ${colaborador.nome} ${formatarHoras(colaborador.horas)} !`);
    const detalhes = dia.colaboradores.map((colaborador, indiceDetalhe) => {
        const horasPorTfm = obterHorasPorTfmDoDia(dia.data, colaborador);
        const listaTfms = [...horasPorTfm.entries()]
            .sort(([primeiro], [segundo]) => primeiro.localeCompare(segundo, "pt-BR", { numeric: true }))
            .map(([tfm, horas]) => `<span><i class="bi bi-clipboard-check"></i> TFM ${tfm}<strong>${formatarHoras(horas)}</strong></span>`)
            .join("") || "<span>Sem TFM informado</span>";
        return `<div class="grupo-tfms-dia"><button class="resumo-colaborador-dia" type="button" data-detalhe-colaborador="${indiceDetalhe}" aria-expanded="false"><span><strong>${colaborador.nome}</strong><small>${formatarHoras(colaborador.horas)}</small></span><i class="bi bi-chevron-right" aria-hidden="true"></i></button><div class="lista-tfms-dia" data-lista-tfms="${indiceDetalhe}" hidden>${listaTfms}</div></div>`;
    }).join("");
    const avisos = [
        disponiveisSemLancamento.length ? `<div class="aviso-disponibilidade aviso-sem-lancamento"><strong>Disponíveis sem lançamento</strong><span>${disponiveisSemLancamento.join("<br>")}</span></div>` : "",
        lancamentosSemDisponibilidade.length ? `<div class="aviso-disponibilidade aviso-sem-disponibilidade"><strong>Lançamentos sem disponibilidade</strong><span>${lancamentosSemDisponibilidade.join("<br>")}</span></div>` : ""
    ].join("");
    const contexto = colaboradorSelecionado ? "pelo colaborador" : "pela equipe";
    conteudoPainelTfmsDia.innerHTML = `<p class="painel-resumo">${formatarHoras(dia.horas)} registradas ${contexto} em ${dia.tfmNumeros.length} TFM(s).</p>${avisos}${detalhes || '<p class="vazio">Nenhum TFM informado neste dia.</p>'}`;
    conteudoPainelTfmsDia.querySelectorAll("[data-detalhe-colaborador]").forEach((botao) => botao.addEventListener("click", () => {
        const lista = conteudoPainelTfmsDia.querySelector(`[data-lista-tfms="${botao.dataset.detalheColaborador}"]`);
        const expandido = botao.getAttribute("aria-expanded") === "true";
        botao.setAttribute("aria-expanded", String(!expandido));
        lista.hidden = expandido;
        botao.querySelector("i").className = `bi ${expandido ? "bi-chevron-right" : "bi-chevron-down"}`;
    }));
    painelTfmsDia.hidden = false;
    btnFecharPainelTfmsDia.focus();
}

function fecharPainelTfmsDia() {
    painelTfmsDia.hidden = true;
}

function ordenarColaboradores(colaboradores) {
    const criterio = ordenarEquipe.value;
    return [...colaboradores].sort((primeiro, segundo) => {
        if (criterio === "nome") return primeiro.nome.localeCompare(segundo.nome, "pt-BR");
        if (criterio === "tfms") return segundo.tfms - primeiro.tfms || segundo.horas - primeiro.horas;
        return segundo.horas - primeiro.horas || segundo.tfms - primeiro.tfms;
    });
}

function obterHorasEmAndamentoColaborador(dados, colaborador) {
    const matricula = String(colaborador.matricula || "").trim();
    const nome = normalizarNome(colaborador.nome);
    return (dados.detalhesTfmsEmAndamento || dados.tfmsAbertos || []).reduce((total, tfm) => {
        const pertenceAoColaborador = (matricula && String(tfm.matricula || "").trim() === matricula)
            || (!matricula && nome && normalizarNome(tfm.responsavel) === nome);
        return pertenceAoColaborador
            ? total + Number(tfm.horas || 0) + Number(tfm.horasAdicionais || 0)
            : total;
    }, 0);
}

function obterColaboradoresNoPeriodo() {
    const inicio = filtroInicioEquipe.value;
    const fim = filtroFimEquipe.value;
    if (inicio && fim && fim < inicio) return [];

    return (dadosDashboardAtual?.colaboradores || []).map((colaborador) => {
        const dias = (colaborador.dias || [])
            .map((dia) => ({ ...dia, data: normalizarDataIso(dia.data) }))
            .filter((dia) => dia.data && (!inicio || dia.data >= inicio) && (!fim || dia.data <= fim));
        const tfms = new Set(dias.flatMap((dia) => dia.tfmNumeros || []).filter(Boolean));
        return {
            ...colaborador,
            dias,
            horas: dias.reduce((total, dia) => total + Number(dia.horas || 0), 0),
            horasPadrao: dias.reduce((total, dia) => total + Number(dia.horasPadrao || 0), 0),
            tfms: tfms.size,
            ultimaData: dias.map((dia) => dia.data).sort().at(-1) || ""
        };
    }).filter((colaborador) => colaborador.dias.length);
}

function obterHorasDisponiveisNoPeriodo(dados, colaboradores) {
    const inicio = filtroInicioEquipe.value;
    const fim = filtroFimEquipe.value;
    const chaves = obterChavesColaboradores(colaboradores);
    return (dados.disponibilidade || []).reduce((total, item) => {
        const data = normalizarDataIso(item.data);
        const pertenceAoColaborador = chaves.has(`matricula:${String(item.matricula || "").trim()}`)
            || chaves.has(`nome:${normalizarNome(item.nome)}`);
        return data && pertenceAoColaborador && deveConsiderarDisponibilidade(item) && (!inicio || data >= inicio) && (!fim || data <= fim)
            ? total + obterHorasDisponiveisValidas(item.horasDisponiveis)
            : total;
    }, 0);
}

function renderizarTotalEquipe(colaboradores) {
    const dados = dadosDashboardAtual || {};
    const totalHoras = colaboradores.reduce((total, item) => total + Number(item.horas || 0), 0);
    const tfmsDistintos = new Set(colaboradores.flatMap((colaborador) => (
        (colaborador.dias || []).flatMap((dia) => dia.tfmNumeros || [])
    )).filter(Boolean));
    const totalDisponiveis = obterHorasDisponiveisNoPeriodo(dados, colaboradores);
    const horasEmContinuidade = colaboradores.length === (dados.colaboradores || []).length
        ? Number(dados.totalHorasTfmsEmAndamento || 0)
        : 0;
    totalEquipe.innerHTML = [
        criarIndicador("Total de horas", formatarHoras(totalHoras)),
        criarIndicador("TFMs distintos", tfmsDistintos.size),
        criarIndicador("Disponíveis acumuladas", formatarHoras(totalDisponiveis)),
        criarIndicador("Horas em continuidade", formatarHoras(horasEmContinuidade))
    ].join("");
}

function renderizarResumoColaborador() {
    const inicio = filtroInicioEquipe.value;
    const fim = filtroFimEquipe.value;
    if (inicio && fim && fim < inicio) {
        resumoColaborador.innerHTML = '<p class="vazio">A data final deve ser igual ou posterior à data inicial.</p>';
        calendarioColaborador.hidden = true;
        renderizarTabela(tabelaEquipe, [], []);
        totalEquipe.innerHTML = "";
        return;
    }
    const indice = filtroEquipe.value;
    const colaboradoresNoPeriodo = obterColaboradoresNoPeriodo();
    const colaboradorOriginal = indice === "" ? null : dadosDashboardAtual?.colaboradores?.[Number(indice)];
    const colaborador = colaboradorOriginal ? colaboradoresNoPeriodo.find((item) => item.matricula === colaboradorOriginal.matricula || normalizarNome(item.nome) === normalizarNome(colaboradorOriginal.nome)) : null;
    calendarioColaborador.hidden = !colaborador;
    if (!colaborador) {
        resumoColaborador.innerHTML = "";
        const colaboradores = ordenarColaboradores(colaboradoresNoPeriodo);
        renderizarTabela(tabelaEquipe, ["Colaborador", "Matrícula", "Horas", "TFMs", "Horas em andamento", "Disponíveis no período", "Último lançamento"], colaboradores.map((item) => [item.nome, item.matricula || "-", formatarHoras(item.horas), item.tfms, formatarHoras(obterHorasEmAndamentoColaborador(dadosDashboardAtual || {}, item)), formatarHoras(obterHorasDisponiveisNoPeriodo(dadosDashboardAtual || {}, [item])), formatarData(item.ultimaData)]));
        renderizarTotalEquipe(colaboradores);
        return;
    }
    const todosOsDias = (colaborador.dias || []).map((dia) => ({ ...dia, data: normalizarDataIso(dia.data) })).filter((dia) => dia.data && Number(dia.horas || 0) > 0);
    const dataReferencia = todosOsDias.map((dia) => dia.data).sort().at(-1);
    const inicioPadrao = dataReferencia ? obterInicioSemana(dataReferencia) : "";
    const fimPadrao = inicioPadrao ? adicionarDias(inicioPadrao, 6) : "";
    const inicioSemana = calendarioColaborador.dataset.inicio || inicioPadrao;
    const fimSemana = calendarioColaborador.dataset.fim || fimPadrao;
    const dias = todosOsDias.filter((dia) => (!inicioSemana || dia.data >= inicioSemana) && (!fimSemana || dia.data <= fimSemana));
    const atividades = colaborador.atividades || [];
    const atividadesComPadrao = atividades.filter((item) => item.tempoPadrao > 0);
    const porEfetividade = [...atividadesComPadrao].sort((primeira, segunda) => (segunda.tempoPadrao / segunda.horas) - (primeira.tempoPadrao / primeira.horas));
    resumoColaborador.innerHTML = [
        criarIndicador("Horas trabalhadas", formatarHoras(colaborador.horas)),
        criarIndicador("Disponíveis no período", formatarHoras(obterHorasDisponiveisNoPeriodo(dadosDashboardAtual || {}, [colaborador]))),
        criarIndicador("TFMs", colaborador.tfms),
        criarIndicador("Média por dia", formatarHoras(todosOsDias.length ? colaborador.horas / todosOsDias.length : 0)),
        criarIndicador("Tempo padrão", formatarHoras(colaborador.horasPadrao)),
        criarIndicador("Atividade mais efetiva", porEfetividade[0]?.atividade || "-"),
        criarIndicador("Atividade menos efetiva", porEfetividade[porEfetividade.length - 1]?.atividade || "-")
    ].join("");
    renderizarTotalEquipe([colaborador]);
    calendarioColaborador.innerHTML = `<div class="secao-cabecalho"><span>Histórico diário</span><h2>Calendário semanal</h2></div><div class="filtros-semana-colaborador"><label>Início<input id="inicio-semana-colaborador" type="date" value="${inicioSemana}"></label><label>Fim<input id="fim-semana-colaborador" type="date" value="${fimSemana}"></label></div><div class="calendario-grade">${dias.map((dia, indiceDia) => `<button class="dia-calendario ${obterClasseHorasCalendario(dia.horas)}" type="button" data-dia-colaborador="${indiceDia}"><strong>${formatarData(dia.data)}</strong><span>${formatarHoras(dia.horas)} trabalhadas</span><span>${dia.tfms} TFM(s)</span></button>`).join("") || '<p class="vazio">Não há lançamentos nesta semana.</p>'}</div>`;
    calendarioColaborador.querySelectorAll("[data-dia-colaborador]").forEach((botao) => botao.addEventListener("click", () => abrirPainelTfmsDia(colaborador, dias[Number(botao.dataset.diaColaborador)])));
    calendarioColaborador.querySelector("#inicio-semana-colaborador")?.addEventListener("change", (evento) => {
        calendarioColaborador.dataset.inicio = evento.target.value;
        calendarioColaborador.dataset.fim = evento.target.value ? adicionarDias(evento.target.value, 6) : "";
        renderizarResumoColaborador();
    });
    calendarioColaborador.querySelector("#fim-semana-colaborador")?.addEventListener("change", (evento) => {
        calendarioColaborador.dataset.fim = evento.target.value;
        renderizarResumoColaborador();
    });
    renderizarTabela(tabelaEquipe, ["Atividade", "Horas trabalhadas", "Tempo padrão"], atividades.map((item) => [item.atividade, formatarHoras(item.horas), formatarHoras(item.tempoPadrao)]));
}

function renderizarDisponibilidade(dados) {
    const indice = filtroDisponibilidade.value;
    const colaborador = indice === "" ? null : dados.colaboradores?.[Number(indice)];
    const dataSelecionada = filtroDataDisponibilidade.value || dataHoje();
    const registros = (dados.disponibilidade || []).map((item) => ({ ...item, data: normalizarDataIso(item.data) })).filter((item) => (
        item.data
        && deveConsiderarDisponibilidade(item)
        && (!colaborador || item.matricula === colaborador.matricula || normalizarNome(item.nome) === normalizarNome(colaborador.nome))
        && item.data === dataSelecionada
    ));
    const horasDisponiveis = registros.reduce((total, item) => total + Number(item.horasDisponiveis || 0), 0);
    resumoDisponibilidade.innerHTML = [
        criarIndicador("Data consultada", formatarData(dataSelecionada)),
        criarIndicador("Colaboradores", registros.length),
        criarIndicador("Horas disponíveis", formatarHoras(horasDisponiveis))
    ].join("");
    renderizarTabela(tabelaDisponibilidade, ["Colaborador", "Data", "Situação", "Horas disponíveis"], registros.map((item) => [item.nome, formatarData(item.data), item.situacao, formatarHoras(item.horasDisponiveis)]));
}

function renderizarDivergencias(dados) {
    const indice = filtroDivergencias.value;
    const colaborador = indice === "" ? null : dados.colaboradores?.[Number(indice)];
    resumoDivergencias.innerHTML = "";

    if (!colaborador) {
        tabelaDivergencias.innerHTML = '<p class="vazio">Selecione um colaborador para consultar as divergências diárias.</p>';
        return;
    }

    const disponibilidadesPorData = new Map((dados.disponibilidade || [])
        .map((item) => ({ ...item, data: normalizarDataIso(item.data) }))
        .filter((item) => (
            item.data
            && (item.matricula === colaborador.matricula
            || normalizarNome(item.nome) === normalizarNome(colaborador.nome)
            )
        ))
        .map((item) => [item.data, item]));
    const divergencias = (colaborador.dias || []).map((dia) => {
        const data = normalizarDataIso(dia.data);
        const disponibilidade = disponibilidadesPorData.get(data);
        const horasDisponiveis = Number(disponibilidade?.horasDisponiveis || 0);
        return { ...dia, data, horasDisponiveis, situacao: disponibilidade?.situacao || "Não informado" };
    }).filter((dia) => dia.horas > dia.horasDisponiveis);
    const totalExcedente = divergencias.reduce((total, dia) => total + dia.horas - dia.horasDisponiveis, 0);

    resumoDivergencias.innerHTML = [
        criarIndicador("Dias com divergência", divergencias.length),
        criarIndicador("Horas excedentes", formatarHoras(totalExcedente)),
        criarIndicador("Colaborador", colaborador.nome)
    ].join("");
    renderizarTabela(tabelaDivergencias, ["Data", "Horas lançadas", "Disponíveis", "Excedente", "TFMs do dia"], divergencias.map((dia) => [
        formatarData(dia.data),
        formatarHoras(dia.horas),
        formatarHoras(dia.horasDisponiveis),
        formatarHoras(dia.horas - dia.horasDisponiveis),
        (dia.tfmNumeros || []).join(", ") || "-"
    ]));
}

function trocarVisao(visao) {
    navegacaoDashboard.forEach((botao) => botao.classList.toggle("dashboard-nav-ativo", botao.dataset.dashboardView === visao));
    visoesDashboard.forEach((conteudo) => {
        conteudo.hidden = conteudo.dataset.dashboardContent !== visao;
    });
}

function extrairTfmsConsulta(valor) {
    return [...new Set([...String(valor || "").matchAll(/(?:^|\D)(\d{6})(?=\D|$)/g)].map((resultado) => resultado[1]))];
}

async function consultarTfmsDashboard(evento) {
    evento.preventDefault();
    const tfms = extrairTfmsConsulta(consultaTfmInput.value);

    if (!tfms.length) {
        resultadoConsultaTfm.innerHTML = '<p class="vazio">Informe ao menos um TFM com 6 números.</p>';
        consultaTfmInput.focus();
        return;
    }

    resultadoConsultaTfm.innerHTML = '<p class="vazio">Consultando TFMs...</p>';
    try {
        const parametros = new URLSearchParams({ acao: "buscarTfms", tfms: tfms.join(",") });
        const resposta = await fetch(`${SCRIPT_URL}?${parametros}`);
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso) throw new Error(dados.erro || "Não foi possível consultar os TFMs.");

        renderizarTabela(resultadoConsultaTfm, ["TFM", "Situação"], (dados.resultados || []).map((item) => [
            item.tfm,
            item.encontrado ? "Encontrado" : "Não encontrado"
        ]));
    } catch (erro) {
        resultadoConsultaTfm.innerHTML = `<p class="vazio">${erro.message}</p>`;
    }
}

async function carregarDashboard() {
    alternarBloqueioCarregamento(true);

    try {
        const setor = seletorSetor.value;
        tituloSetor.textContent = nomeSetor(setor);
        statusDashboard.textContent = "Atualizando dados centralizados...";
        rankingAtividades.innerHTML = "";
        rankingAtividadesCompleto.innerHTML = "";

        const parametros = new URLSearchParams({ acao: "dashboardCentral", token: sessaoAtual.token, setor });
        const resposta = await fetch(`${SCRIPT_URL}?${parametros}`, { signal: AbortSignal.timeout(30000) });
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso) {
            throw new Error(dados.erro || "Não foi possível carregar o dashboard.");
        }

        renderizarAtividades(dados.atividades || [], rankingAtividadesCompleto);
        dadosDashboardAtual = dados;
        preencherFiltrosVisaoGeral(dados);
        renderizarVisaoGeral(dados);
        preencherFiltrosColaborador(dados.colaboradores || []);
        if (!filtroDataDisponibilidade.value) {
            filtroDataDisponibilidade.value = (dados.disponibilidade || [])
                .map((item) => normalizarDataIso(item.data))
                .filter(Boolean)
                .sort()
                .at(-1) || dataHoje();
        }
        renderizarDadosSecundarios(dados);
        renderizarResumoColaborador();
        renderizarDivergencias(dados);
        definirPeriodoInicialCalendario(dados);
        renderizarCalendarioGeral();
        statusDashboard.textContent = `Dados de ${nomeSetor(setor)} na planilha central.`;
    } catch (erro) {
        statusDashboard.textContent = erro.name === "TimeoutError"
            ? "A atualização demorou mais que o esperado. Tente novamente."
            : erro.message;
    } finally {
        alternarBloqueioCarregamento(false);
    }
}

document.getElementById("btn-atualizar-dashboard").addEventListener("click", carregarDashboard);
document.getElementById("btn-sair-dashboard").addEventListener("click", () => {
    localStorage.removeItem(LOGIN_CHAVE);
    window.location.href = "index.html";
});
seletorSetor.addEventListener("change", carregarDashboard);
navegacaoDashboard.forEach((botao) => botao.addEventListener("click", () => trocarVisao(botao.dataset.dashboardView)));
formConsultarTfm.addEventListener("submit", consultarTfmsDashboard);
filtroEquipe.addEventListener("change", () => {
    delete calendarioColaborador.dataset.inicio;
    delete calendarioColaborador.dataset.fim;
    renderizarResumoColaborador();
});
ordenarEquipe.addEventListener("change", renderizarResumoColaborador);
[filtroInicioEquipe, filtroFimEquipe].forEach((filtro) => filtro.addEventListener("change", () => {
    if (filtro === filtroInicioEquipe && filtroFimEquipe.value && filtro.value > filtroFimEquipe.value) filtroFimEquipe.value = "";
    if (filtro === filtroFimEquipe && filtroInicioEquipe.value && filtro.value < filtroInicioEquipe.value) filtroInicioEquipe.value = "";
    delete calendarioColaborador.dataset.inicio;
    delete calendarioColaborador.dataset.fim;
    renderizarResumoColaborador();
}));
filtroDisponibilidade.addEventListener("change", () => renderizarDisponibilidade(dadosDashboardAtual || {}));
filtroDataDisponibilidade.addEventListener("change", () => renderizarDisponibilidade(dadosDashboardAtual || {}));
filtroDivergencias.addEventListener("change", () => renderizarDivergencias(dadosDashboardAtual || {}));
filtroCalendario.addEventListener("change", renderizarCalendarioGeral);
[
    filtroNomeVisaoGeral,
    filtroMesVisaoGeral,
    filtroTurnoVisaoGeral,
    filtroAtividadeVisaoGeral
].forEach((filtro) => filtro.addEventListener("change", () => renderizarVisaoGeral(dadosDashboardAtual || {})));
btnMesAnteriorCalendario.addEventListener("click", () => mudarMesCalendario(-1));
btnProximoMesCalendario.addEventListener("click", () => mudarMesCalendario(1));
btnFecharPainelTfmsDia.addEventListener("click", fecharPainelTfmsDia);
painelTfmsDia.addEventListener("click", (evento) => {
    if (evento.target === painelTfmsDia) fecharPainelTfmsDia();
});

function alternarCentralAjuda(abrir) {
    centralAjuda.hidden = !abrir;
    btnCentralAjuda.setAttribute("aria-expanded", String(abrir));
    if (abrir) conversaCentralAjuda.scrollTop = conversaCentralAjuda.scrollHeight;
}

btnCentralAjuda.addEventListener("click", () => alternarCentralAjuda(centralAjuda.hidden));
btnFecharCentralAjuda.addEventListener("click", () => alternarCentralAjuda(false));
document.querySelectorAll("[data-ajuda-pergunta]").forEach((botao) => {
    botao.addEventListener("click", () => {
        const pergunta = botao.textContent;
        const resposta = respostasAjuda[botao.dataset.ajudaPergunta];
        const mensagemPergunta = document.createElement("p");
        mensagemPergunta.className = "mensagem-ajuda mensagem-ajuda-usuario";
        mensagemPergunta.textContent = pergunta;
        const mensagemResposta = document.createElement("p");
        mensagemResposta.className = "mensagem-ajuda mensagem-ajuda-bot";
        mensagemResposta.textContent = resposta;
        conversaCentralAjuda.append(mensagemPergunta, mensagemResposta);
        conversaCentralAjuda.scrollTop = conversaCentralAjuda.scrollHeight;
    });
});

inputFotoPerfil.addEventListener("change", () => {
    const arquivo = inputFotoPerfil.files?.[0];
    if (!arquivo) return;
    if (arquivo.size > 2 * 1024 * 1024) {
        inputFotoPerfil.value = "";
        alert("Escolha uma imagem de até 2 MB.");
        return;
    }

    const leitor = new FileReader();
    leitor.addEventListener("load", () => {
        try {
            localStorage.setItem(obterChaveFotoPerfil(), String(leitor.result));
            atualizarFotoPerfil(String(leitor.result));
        } catch (erro) {
            alert("Não foi possível salvar a foto neste navegador.");
        }
    });
    leitor.readAsDataURL(arquivo);
});

btnRemoverFotoPerfil.addEventListener("click", () => {
    localStorage.removeItem(obterChaveFotoPerfil());
    inputFotoPerfil.value = "";
    atualizarFotoPerfil("");
});

validarSessao().then((autorizado) => {
    if (autorizado) carregarDashboard();
}).catch(mostrarAcessoNegado);