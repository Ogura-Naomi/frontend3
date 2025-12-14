import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx";
import fetchCustomer from "./fetchCustomer";

export default async function ConfirmPage({ searchParams }) {
  // URL ?customer_id=XXXX を取得
  const customer_id = searchParams?.customer_id;

  if (!customer_id) {
    return <div>customer_id が指定されていません。</div>;
  }

  // サーバーでデータ取得（useEffectもuseStateも不要）
  const customerData = await fetchCustomer(customer_id);

  return (
    <>
      <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
        <div className="alert alert-success p-4 text-center">
          正常に作成しました
        </div>

        {/* 取得した顧客データをカード表示 */}
        <OneCustomerInfoCard {...customerData[0]} />

        <button>
          <a href="/customers" className="btn btn-primary m-4 text-2xl">
            戻る
          </a>
        </button>
      </div>
    </>
  );
}
