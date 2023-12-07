import { type UUID } from "crypto";

export const AUTH = "Bearer " + process.env.LOYVERSE_TOKEN;
export const API_BASE = "https://api.loyverse.com/v1.0";

/**
 * @todo DO SOMETHING WITH THIS AND ADD ONTO IT
 */
export type CleanItem = {
    id: UUID,
    name: string,
};

export type VariantStore = {
    store_id: string,
    pricing_type: string,
    price: null | number,
    available_for_sale: boolean,
    optimal_stock: null | number,
    low_stock: null | number
};

export type Variant = {
    variant_id: UUID,
    item_id: UUID,
    sku: string,
    reference_variant_id: string | null,
    option1_value: string | null,
    option2_value: string | null,
    option3_value: string | null,
    barcode: string | null,
    cost: number,
    purchase_cost: number | null,
    default_pricing_type: string,
    default_price: number | null,
    stores: VariantStore[],
    created_at: string | null,
    updated_at: string | null,
    deleted_at: string | null
};

export type Shape = "SQUARE" | "CIRCLE" | "SUN" | "OCTAGON";
export type Color = "GREY" | "RED" | "PINK" | "ORANGE" | "YELLOW" | "GREEN" | "BLUE" | "PURPLE";

export type Component = {
    variant_id: UUID,
    quantity: number
};
/**
 * Item has overall description for its variants.
 * An item with no variants will not have an empty variants array.
 * It will have ONE variant.
 * 
 * The ID of that variant is not the same as the item ID.
 * When an item has multiple variants, each variant will NOT have a
 * different description and different image.
 */
export type Item = {
    id: UUID,
    handle: string,
    item_name: string,
    reference_id: string | null,
    category_id: UUID | null,
    track_stock: boolean,
    sold_by_weight: boolean,
    is_composite: boolean,
    use_production: boolean,
    components: Component[],
    primary_supplier_id: UUID | null,
    tax_ids: [
        UUID,
        UUID
    ],
    modifiers_ids: [
        string,
        string
    ],
    form: Shape /* SHAPE */,
    color: Color /* COLOR */,
    image_url: string,
    option1_name: string | null,
    option2_name: string | null,
    option3_name: string | null,
    created_at: string | null,
    updated_at: string | null,
    deleted_at: string | null,
    variants: Variant[]
};
export type Items = {
    items: Item[],
    cursor: string
};