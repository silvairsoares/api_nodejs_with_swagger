/**
 * @swagger
 * definitions:
 *   Cliente:
 *     type: object
 *     required:
 *       - id
 *       - Nome
 *       - Endereco
 *       - Profissao
 *       - Nascimento
 *     properties:
 *       id:
 *         type: number
 *       Nome:
 *         type: string
 *       Endereco:
 *         type: string
 *       Nascimento:
 *         type: string
 * 
 *   Clientes:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Cliente'
 */
export default class Cliente {
    constructor (id, Nome, Endereco, Profissao, Nascimento) {
      this.id = id
      this.Nome = Nome
      this.Endereco = Endereco
      this.Profissao = Profissao
      this.Nascimento = Nascimento
    }
  }
  