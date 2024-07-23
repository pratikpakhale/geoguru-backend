const Role = require("../models/role");

class RoleService {
  async createRole(roleData) {
    try {
      const newRole = new Role(roleData);
      await newRole.save();
      return newRole;
    } catch (error) {
      throw error;
    }
  }

  async getRoleById(roleId) {
    try {
      const role = await Role.findById(roleId);
      if (!role) {
        throw new Error("Role not found");
      }

      return {
        ...role._doc,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateRole(roleId, roleData) {
    try {
      const updatedRoleData = {
        ...roleData,
      };
      const updatedRole = await Role.findByIdAndUpdate(
        roleId,
        updatedRoleData,
        { new: true }
      );
      if (!updatedRole) {
        throw new Error("Role not found");
      }
      return {
        ...updatedRole._doc,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(roleId) {
    try {
      await Role.findByIdAndDelete(roleId);
    } catch (error) {
      throw error;
    }
  }

  async getAllRoles() {
    try {
      const roles = await Role.find();
      return roles;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RoleService;
