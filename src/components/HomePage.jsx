import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-[100vh]">
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="overflow-auto"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          inventore molestiae eos, cupiditate amet veritatis consectetur fugiat
          nam ex dicta? Doloremque amet reiciendis voluptas quod culpa
          accusantium beatae neque, ex esse, hic provident at? Soluta
          reprehenderit, omnis voluptas, facere illo quaerat ad excepturi
          officiis sequi ullam amet ab hic minus voluptatum aperiam id
          reiciendis doloribus deserunt sint? Provident omnis molestias qui
          totam aliquid. Ipsam beatae mollitia aperiam facilis assumenda dolores
          sapiente quae quia eum at nobis libero optio autem, minima natus
          voluptatibus cumque distinctio, veritatis, laborum animi possimus?
          Distinctio ex consequatur illum quia excepturi fugit impedit dolorum
          molestias libero magni consectetur iusto ea illo dolorem quam
          voluptatem, vero perferendis, aperiam exercitationem praesentium
          doloribus, debitis ipsum molestiae nam! Error saepe enim aspernatur
          expedita dignissimos harum ex quia numquam quae eligendi deserunt
          laboriosam provident maxime sint doloremque, hic voluptates nulla
          eaque deleniti minima cumque neque dolorum fuga! Quaerat eos harum
          illo eligendi veniam dolore, enim delectus esse at pariatur deleniti,
          dicta cum in? Delectus quaerat dicta totam pariatur minus nobis, est,
          nam quidem eos iusto sint impedit blanditiis, maxime accusamus. Dolor
          doloribus vel voluptatem minima placeat pariatur molestias natus quas
          error. Minima maiores voluptas alias fugit id repudiandae incidunt
          rerum nihil reprehenderit quas repellat ea sint eligendi officia,
          suscipit exercitationem, aspernatur cumque laboriosam velit nam? Nam
          reiciendis velit ipsum mollitia, quas nihil unde, porro illum
          repellendus, rerum minus! Commodi aliquam dolore at numquam explicabo
          repudiandae placeat eum temporibus libero. Recusandae, ex aperiam
          beatae cumque repellat autem aliquam laudantium ratione sint nobis
          vitae adipisci quas illum quam animi nesciunt placeat doloremque quo
          aspernatur nisi veritatis. Necessitatibus vel illo, ducimus error,
          recusandae assumenda cupiditate minus nostrum doloremque delectus
          adipisci. Vel tempora ipsa, obcaecati nisi similique temporibus
          molestiae adipisci laboriosam laudantium, blanditiis eveniet,
          accusamus ratione harum voluptates! Alias dicta quos similique ex
          neque? Voluptatum eligendi architecto excepturi accusantium quasi
          accusamus, asperiores iusto optio illum repellendus reiciendis
          perferendis consectetur, quia itaque. Soluta illo corporis doloribus
          iusto recusandae temporibus porro ducimus molestiae similique vitae
          repellat est quod veniam excepturi quos, libero esse reprehenderit
          nobis quia facere, labore ipsa dolorum? Reiciendis placeat, sequi modi
          earum quae cupiditate laborum non? Officia, repellat alias delectus
          nisi, aspernatur nulla dignissimos totam molestias exercitationem
          quis, suscipit aliquam. Aliquid possimus ducimus nisi, cum esse iure
          et numquam itaque, quae voluptate sint est excepturi sit quod
          accusamus fugiat unde consectetur tempore labore, expedita corrupti
          nobis eveniet. Iste facere eum quisquam blanditiis ab magnam expedita
          necessitatibus nulla, inventore commodi ipsa velit incidunt
          consequuntur similique? Illum quod voluptas repudiandae possimus
          quisquam hic ut quas, cumque dolore, pariatur consectetur odit. Quidem
          voluptatum asperiores possimus provident facilis dicta nihil iste, hic
          nisi vitae cupiditate illo neque iure dolor officia ex dolorum est
          amet suscipit. Quibusdam voluptate itaque, maiores non eveniet iure
          reprehenderit provident aut, sunt nihil praesentium modi voluptatem
          consequuntur asperiores nesciunt ad, excepturi rem beatae! Aperiam
          quidem expedita ullam cum culpa, dolorem id adipisci exercitationem
          qui nisi ea perspiciatis ipsum provident et fugit deserunt excepturi
          voluptas iure nesciunt illum quos, saepe eos labore rerum. Porro
          doloribus quidem similique facilis asperiores, ratione voluptatem
          neque corporis sit ipsum, voluptas at nam, corrupti quae ut nobis quo
          ab fuga est culpa quasi inventore aliquid laborum. Unde quidem fugit
          est earum rem dolor nostrum enim culpa dicta ullam laudantium commodi
          maxime molestias libero, vero odit. Architecto sed veritatis
          similique, odio ducimus illum nulla reprehenderit omnis consectetur
          corporis id nam rem veniam dignissimos quisquam? Soluta dicta
          reprehenderit enim perspiciatis officiis tenetur qui incidunt,
          laudantium in quo deserunt. Ipsa libero, aliquid sequi beatae neque
          error incidunt corrupti cupiditate ipsam exercitationem veritatis quia
          modi esse et facilis inventore sunt nihil hic ullam impedit optio
          nulla. Iure ratione temporibus distinctio aut, fugit ullam accusamus
          expedita nostrum culpa eum voluptas. Hic, consectetur quaerat! Quia,
          unde reprehenderit, quas sequi cupiditate esse repudiandae illo sed
          nobis fugit officiis, ullam quae tempora explicabo quibusdam veniam?
          Aut dolorum voluptatum aliquid optio harum tempore, qui iste deleniti.
          Eaque, maiores architecto quo deleniti autem commodi. Pariatur earum
          reiciendis doloremque voluptates eum harum tenetur quos illum ex.
          Tempore rem odio doloremque maiores, consequatur atque blanditiis,
          consequuntur expedita labore placeat recusandae perferendis laudantium
          architecto dignissimos incidunt, qui non eius officia id fuga.
          Recusandae maiores veniam nulla accusantium adipisci in impedit maxime
          vitae id ea asperiores est alias delectus unde repudiandae ducimus aut
          laborum, possimus libero odio! Atque, nobis illo. Sed nostrum culpa
          sequi est recusandae unde incidunt. Eligendi ipsum vitae porro iure!
          Commodi recusandae soluta id pariatur qui fugiat sunt. Voluptatibus,
          deleniti alias commodi unde minus accusantium natus dolores
          aspernatur. Alias doloribus unde corporis impedit. Ex quae dignissimos
          voluptatibus tempora excepturi quod voluptates dolores optio fuga.
          Odio exercitationem officia totam excepturi, consectetur eaque eius
          recusandae expedita perspiciatis laudantium quia esse. Omnis, minus.
          Ipsam molestias porro enim iste magni qui error soluta reiciendis
          voluptatem praesentium necessitatibus fugiat nam rerum aliquam officia
          facilis quis consectetur libero, amet quibusdam quod! Accusamus,
          ipsam. Nobis fugit impedit, nulla numquam, nam saepe tempore optio
          nemo labore dolorem totam facilis odit repellat, tenetur perferendis
          fugiat nesciunt. Mollitia, dolorem hic iusto dolor deserunt enim
          molestiae modi porro, dolorum molestias voluptatem nisi soluta
          incidunt accusantium sequi, natus eos. A blanditiis recusandae sunt
          voluptate quia neque aliquid et dignissimos, nisi eligendi atque
          facere, dolor ipsam ea commodi, fugiat soluta nihil iure modi ducimus
          repudiandae quasi? Adipisci voluptate voluptas tempore amet. Omnis
          consequuntur voluptatum eum doloremque, sint accusantium id a expedita
          suscipit deleniti praesentium odio aperiam dolore ratione minus
          consectetur perspiciatis, doloribus nemo tempore officia voluptatibus
          beatae? Nostrum sint magni vitae veniam accusantium quasi cum.
          Explicabo eum nemo ab velit veritatis aut a eligendi assumenda, amet
          alias ut officiis voluptatibus illum, fugiat, ipsa molestiae. Cumque
          ad esse temporibus perspiciatis ut quod totam expedita tempore vero in
          at aperiam quam, modi facere nisi rerum sint saepe quo praesentium.
          Saepe veniam quam quibusdam cupiditate expedita dolorum, eaque itaque
          blanditiis ea amet. Hic suscipit deserunt consectetur accusantium est
          provident qui eos dolor dicta? Laboriosam aliquid neque debitis quis
          delectus inventore, eveniet at autem sed optio? Earum reiciendis
          mollitia fugiat, blanditiis quidem quasi neque explicabo consequuntur
          debitis laborum veniam!
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
