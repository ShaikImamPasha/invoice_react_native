// src/components/withProtectedRoute.js
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const withProtectedRoute = (Component, isAuthenticated) => {
  return (props) => {
    const navigation = useNavigation();
const route=useRoute()
console.log("roiy",route);

    useEffect(() => {
      if (!isAuthenticated) {
        // If the user is not authenticated, redirect to 'home' and 'maindashboard'
        navigation.reset({
            index: 0,
            routes: [
              {
                name: 'main', // your bottom tab navigator
                state: {
                  index: 0,
                  routes: [
                    {
                      name: 'home', // tab name
                      state: {
                        routes: [{ name: 'maindashboard' }] // screen inside tab
                      }
                    }
                  ]
                }
              }
            ]
          });      }
    }, [isAuthenticated]);


    return <Component {...props} />;
  };
};

export default withProtectedRoute;
