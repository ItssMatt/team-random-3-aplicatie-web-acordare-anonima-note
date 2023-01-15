const teamModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "team",
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
            finishedProject: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        }
        ,
        {
            freezeTableName: true,
        }
    );
};

module.exports = teamModel;
