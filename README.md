# grocal

## Project Description
>*grocal* a portmanteau of 'grow local' is a full-stack development app that aims to empower communities to become more self-relient by creating a e-commerce platform geared towards small farmers seeking to sell their produce. This app is centered towards micro-entrepreneurs living in suburbs who are interested in the micro-agricultural space. 

- [MVP](#mvp)
- [Goals](#goals)
    - [Libraries and Dependencies](#libraries-and-dependencies)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [ERD Model](#erd-model)
    - [Project Schedule](#project-schedule)
    - [Timeframes](#timeframes)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)

<br>

## MVP
- Full CRUD
- Listing produce for sale, Seasons view
- 3 tables: Users, Crops, Seasons
- Allow the users to enter how much of a given crop they have for sale

## Goals
Build out a full-stack app with full CRUD, expand abilities in working on Ruby on Rails and front-end React apps.

<br>

### Libraries and Dependencies
|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | JavaScript framework for front-end development |
|   React Router   | JavaScript package for adding functionality to app, BrowserReactor |

<br>

### Wireframes
<a href='https://www.figma.com/file/eVBHnbdho0O0FrirErYWKk/grocal?node-id=0%3A1' rel="nofollow" target='blank'>Figma Wireframe</a>

<br>

### Component Tree

<a href='https://whimsical.com/grocal-G97Wpuj6Xv6KfTbG9ZSPAP' rel="nofollow" target='blank'>Whimsical Component Tree</a>

<br>

### ERD Model

<a href='https://drive.google.com/file/d/11n--amiR6rYcQT9z_-Kgp2VnnkwcQuYM/view?usp=sharing' rel="nofollow" target='blank'>ERD Model</a>

<br>

### Project Schedule

| Day        | Deliverable                                                | Status     |
| ----- | --------------------------------------------------------------- | ---------- |
| 7/22  | Back-end functionality: Rails (schema, database, models, controllers)  | ✅  |
| 7/23  | Front-end build out api-config (get, pull, post, delete) | ✅  |
| 7/24  | Front-end user Authentication, views & components | ✅  |
| 7/26  | CSS flexbox/grid | ✅  |
| 7/27  | CSS finishing touches -- testing and last minute fixes |  ✅ |

<br>

### Timeframes

| Component                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Basic MVP Design                     |   H      |      5hrs      |    5hrs       |     5hrs    |
| Rails - tables, models, seed data    |   H      |      4hrs      |    3hrs       |    2.5hrs   |
| Rails - migrations                   |   H      |      1hrs      |    2hrs       |    2hrs     |
| Front-end api-config                 |   H      |      2hrs      |    3hrs       |    3hrs     |
| Front-end axios requests             |   H      |      2hrs      |    2hrs       |    1.5hrs   |
| Front-end log-in/register            |   H      |      2hrs      |    3hrs       |    2.5hrs   |
| Front-end produce view               |   H      |      1hrs      |    1hrs       |    1hrs     |
| Front-end seasonal view              |   H      |      1hrs      |    2hrs       |    1.5hrs   |
| Front-end CSS                        |   H      |      3hrs      |    3hrs       |    3hrs     |
| Front-end CSS 2                      |   H      |      3hrs      |    3hrs       |    3hrs     |
| Total Time                           |          |     24hrs      |    30hrs      |    25hrs    |

<br>

## Post-MVP
- Calculating and displaying the average prices for produce that share the same type
- Purchasing window

<br>

## Code Showcase

ProduceEdit.jsx
```
  const [produceFormData, setProduceFormData] = useState({
    produce_type: "",
    name: "",
    variety: "",
    img_url: "",
    quantity: "",
    price: "",
  });
  const { produce_type, name, variety, img_url, quantity, price } =
    produceFormData;
  const { produceList, handleUpdate, seasonsList } = props;
  const [seasonId, setSeasonId] = useState();
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const editingProduce = produceList.find(
        (produce) => produce.id === Number(id)
      );
      setProduceFormData({
        produce_type: editingProduce?.produce_type,
        name: editingProduce?.name,
        variety: editingProduce?.variety,
        img_url: editingProduce?.img_url,
        quantity: editingProduce?.quantity,
        price: editingProduce?.price,
      });
    };
    if (produceList.length) {
      prefillFormData();
    }
    // eslint-disable-next-line
  }, [produceList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduceFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
```

<br>