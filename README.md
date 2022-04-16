# burger-fanatics
Social media and review platform for burger entusiasts

# Prerequisite:
 - Look into c4model before creating system overview
 - Look into AWS hosting services - Amplify - in order to hosting in the cloud and set up the project correctly.
 - Look into other AWS services
 - Create a test Amplify project
 - Test amplify api Graphql 
 - Test amplify DynomoDb 
 - Test amplify geo
 
# Preperations:
 - Create outline of system context
 - Create outline of container diagram
 - Create visual cues for the process
 - Wireframe a simple page diagram
 - Mock up a quick landingpage design
 - Setup git repo
 - Setup a react app and initialize amplify project
 - Test the deployed amplify project

# Project Requirements
  - Review local burger spots - rating
  - Share pictures of burgers
  - Find nearby resturants
  - Store Spots, Reviews (Users, Post, Interactions)
  
# DB
  
  - Store {name, description, openinghours} for the Spots
  - Store {spotid, reviewtext, image, ratingtaste, ratingtexture and ratingvisual} for the Spotreviews
  - Store {is_following_ids, image, name, username, anonymous, createddate} for the Users
  - Store {text, image, link} for the Usersposts
  - Store {postid, like, share, comments} for the Interactions

Based on those we could get these; 
  - list of spots, with info and ratings
  - list of user posts, with interactions
  - list of resent review activities
  - list of resent following activities


# TODO


  - Create landing page                                     - Priority 1
  - Implement nav tabbar with 4 tabs                        - Priority 1
    - Home
    - Burger Spots
    - My Profile

  - Pages in project:
    - Burger spots overview and search                      - Priority 1
    - Single bruger spot page                               - Priority 1
    - Login / sign up                                       - --
    - My Profile                                            - --
  
  - Page overlays
    - Edit My Profile             Overlayed on My Profile   - --
    - Feed settings               Overlayed on Home         - --
  
  
  - Start Setup DB 
    - Store dummy Spots data                                - Priority 2
    - Fetch Spots data                                      - Priority 2
    - Organise the data the the markup                      - Priority 2

    -  Continue with                                        - Priority 3
         Review data, 
         User data, 
         UserInteraction data
