import { Column, Model, Table } from "sequelize-typescript"

@Table({
  timestamps: true
})
export class User extends Model<User> {
  @Column public name: string
}
