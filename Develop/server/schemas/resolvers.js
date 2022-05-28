const User = require("../models/User");
const { signToken } = require('../utils/auth');

// const {User} = require("../models")
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
        }

    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        }
    }

  };
  
  module.exports = resolvers;