import { isUrl } from "../utils/utils";
import Icon, {
  AuditOutlined,
  FontColorsOutlined,
  HomeOutlined,
  LineHeightOutlined,
  ScheduleOutlined,
  SettingOutlined,
  UserOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";
const menuData = [
  {
    key: "inicio",
    label: "Inicio",
    icon: <HomeOutlined />,
    // children,
    // type,
    path: "",
  },
  {
    key: "personas",
    label: "Personas",
    icon: <UserOutlined />,
    // children,
    // type,
    path: "personas",
  },
  {
    key: "calculo",
    label: "Calculadora",
    icon: <CalculatorOutlined />,
    // children,
    // type,
    path: "calculo",
  },
  // {
  //   key: "Configuraciones",
  //   label: "Configuraciones",
  //   icon: <SettingOutlined />,
  //   path: "Configuraciones",
  //   children: [
  //     {
  //       key: "Configuraciones-Comedor",
  //       label: "Comedor",
  //       icon: <SettingOutlined />,
  //       path: "Comedor",
  //     },
  //   ],
  // },
];

function formatter(data, parentPath = "/", parentAuthority, breadcrumbData) {
  return data.map((item, index) => {
    let { path } = item;

    let breadcrumb = breadcrumbData ?? [];
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      index,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      breadcrumb.push({
        label: item.label,
        path: item.path,
        isClickeable: false,
      });
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority,
        breadcrumb
      );
    } else {
      breadcrumb.push({
        label: item.label,
        path: item.path,
        isClickeable: true,
      });
      result.breadcrumb = breadcrumb;
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
