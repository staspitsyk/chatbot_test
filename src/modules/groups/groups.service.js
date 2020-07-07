const Groups = require('./groups.model');
const GroupItems = require('./groups-item.model');
const { NotFound, Forbidden } = require('../../common/exeptions');
const Teachers = require('../teachers/teachers.model');
const Students = require('../students/students.model');

class GroupsService {

  async createOne(groupData, user) {
    if (!user.isTeacher) {
      throw new Forbidden(`Only teachers can create new group`);
    }

    const group = await Groups.findOne({ where: { groupName: groupData.groupName } });

    if (group) {
      throw new NotFound(
        `Group with name ${groupData.groupName} already exist`
      );
    }

    const newGroup = new Groups(groupData);

    return newGroup.save();
  }

  async findOneByName(groupName, user) {
    let group;

    if (user.isTeacher) {
      group = await Groups.findOne({
        where: { groupName },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: GroupItems,
            attributes: { exclude: ['createdAt', 'updatedAt', 'groupId', 'id'] },
            include: [
              {
                model: Teachers,
                attributes: { exclude: ['createdAt', 'updatedAt'] },
              },
            ],
          },
          {
            model: Students,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
      });
    } else {
      group = await Groups.findOne({
        where: { groupName },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: GroupItems,
            attributes: { exclude: ['createdAt', 'updatedAt', 'groupId', 'id'] },
            include: [
              {
                model: Teachers,
                attributes: {
                  exclude: ['createdAt', 'updatedAt', 'email', 'phoneNumber', 'password'],
                },
              },
            ],
          },
          {
            model: Students,
            attributes: { exclude: ['createdAt', 'updatedAt', 'email', 'phoneNumber', 'password'] },
          },
        ],
      });
    }

    if (!group) {
      throw new NotFound(`Group with name ${groupName} not found`);
    }

    if (!user.isTeacher && user.groupId !== group.id) {
      throw new NotFound(`You can't check other group information`);
    }

    return group;
  }

  async findAll(user) {
    if (!user.isTeacher) {
      throw new Forbidden(`Only teachers can check the list of all groups`);
    }

    const groups = await Groups.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: GroupItems,
          attributes: { exclude: ['createdAt', 'updatedAt', 'groupId', 'id'] },
          include: [
            {
              model: Teachers,
              attributes: { exclude: ['createdAt', 'updatedAt'] },
            },
          ],
        },
        {
          model: Students,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
    });

    if (!groups) {
      throw new NotFound(`No groups found`);
    }

    return groups;
  }
}

module.exports = new GroupsService();
