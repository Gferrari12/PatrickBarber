// ╔══════════════════════════════════════════════════════════╗
// ║         PATRICK BARBER — ARQUIVO DE CONFIGURAÇÃO        ║
// ║   Edite apenas este arquivo. Não mexa no index.html     ║
// ╚══════════════════════════════════════════════════════════╝

window.PB_CONFIG = {
  whatsapp: "5519991029809",
  ownerUser: "patrick",
  ownerPass: "barber123",

  firebase: {
    apiKey: "AIzaSyA6KDlC4zoX181z3GllZR01DmT8gzinLIo",
    authDomain: "patrickbarber-1811d.firebaseapp.com",
    projectId: "patrickbarber-1811d",
    storageBucket: "patrickbarber-1811d.firebasestorage.app",
    messagingSenderId: "531185174190",
    appId: "1:531185174190:web:a6dbfbee26e72249d30f3f"
  },

  horarios: {
    0: null,
    1: { inicio: 8, fim: 18 },
    2: { inicio: 8, fim: 18 },
    3: { inicio: 8, fim: 18 },
    4: { inicio: 8, fim: 18 },
    5: { inicio: 8, fim: 18 },
    6: { inicio: 8, fim: 14 }
  },

  servicos: [
    { nome: "Corte de Cabelo", preco: 38 },
    { nome: "Corte de Barba", preco: 30 },
    { nome: "Sobrancelha", preco: 20 },
    { nome: "Combo Cabelo + Barba", preco: 60 },
    { nome: "Acabamento", preco: 15 },
    { nome: "Hidratação", preco: 25 },
    { nome: "Luzes", preco: 80 }
  ],

  ticketMinimo: 70,

  premios: [
    { label: "NADA", prob: 0.50 },
    { label: "Barba Grátis", prob: 0.125 },
    { label: "Cabelo Grátis", prob: 0.125 },
    { label: "Outro Giro", prob: 0.125 },
    { label: "Sobrancelha", prob: 0.125 }
  ]
};