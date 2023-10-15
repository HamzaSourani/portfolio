import { LngParams } from "@/app/type";
import { translation } from "@/i18n";
import { Trans } from "react-i18next/TransWithoutContext";

async function Projects({ params: { lng } }: LngParams) {
  const { t } = await translation(lng, "projects");
  return (
    <Trans i18nKey={"realState.description"} t={t}>
      The dashboard web app is a remarkable achievement,utilizing cutting-edge
      technologies. Powered by React.js, JavaScript, and TypeScript, the app
      boasts an impressive range of features.
      <ul {...{ i18nIsDynamicList: true }}>
        <li>
          The user interface is built using the Material-UI (MUI) library,
          ensuring a sleek and visually captivating design.
        </li>
        <li>
          Form handling and validation are seamlessly managed with Formik and
          Yup, guaranteeing data integrity and accuracy.
        </li>
        <li>
          To optimize data fetching and synchronization with the server, the app
          employs React Query, providing efficient caching and reducing
          unnecessary network requests.
        </li>
        <li>
          User permissions are meticulously managed using the CASL library,
          allowing fine-grained access control based on user roles and
          permissions.
        </li>
        <li>
          Networking capabilities are enhanced with the use of Axios, a popular
          HTTP client library, which simplifies API calls.
        </li>
        <li>
          The app further supports multilingual functionality with i18next,
          enabling users to seamlessly switch between English and Arabic.
        </li>
        <li>
          The app incorporates advanced features such as pagination, ensuring
          efficient data retrieval by fetching smaller chunks of data at a time.
        </li>
        <li>
          The debounce search mechanism optimizes search functionality by
          intelligently delaying requests until the user stops typing.
        </li>
        <li>
          URL parameter filtering allows users to easily share or bookmark
          specific filtered views of the dashboard.
        </li>
        <li>
          The app employs skeleton loading to enhance the user experience,
          providing placeholder content while data is being fetched.
        </li>
      </ul>
      Toast notifications elegantly communicate success and failure messages to
      users.Visualizations and charts are seamlessly integrated into the
      dashboard, presenting data in a clear and informative manner. A secure
      login page ensures authenticated access to the app. The responsive design,
      powered by MUI, ensures a seamless experience across various
      devices.Overall, the dashboard web app developed by [Your Name] is a
      powerful and feature-rich solution for managing the STG Android app. It
      offers users an engaging platform to play games and win prizes, while
      providing an intuitive user interface, optimized performance, and a
      seamless user experience.
    </Trans>
  );
}

export default Projects;
