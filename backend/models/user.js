const userModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isTeamLead: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            isProfessor: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            }
        },
        {
            freezeTableName: true,
        }
    );
};

module.exports = userModel;
