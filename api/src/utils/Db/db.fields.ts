import { DataTypes, ModelAttributeColumnOptions } from "sequelize";

export function IdField(): ModelAttributeColumnOptions{
    return {
        type: DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true
    }
} 