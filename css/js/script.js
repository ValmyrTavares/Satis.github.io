import CloseModal from './module/CloseModal.js'

const modalVisao = new CloseModal('[data-modal="nossaVisao"]',' [data-modal="visaoFecha"]',".wrapper-visao")
modalVisao.init();

const modalMissao = new CloseModal('[data-modal="nossaMissao"]',' [data-modal="missaoFecha"]',".wrapper-missao")
modalMissao.init();

const modalValores = new CloseModal('[data-modal="nossosValores"]',' [data-modal="valoresFecha"]',".wrapper-valores")
modalValores.init();




