import { Column, Model, Table } from "sequelize-typescript"

@Table({
  timestamps: true
})
export default class User extends Model<User> {
  @Column public name: string
}
